// scripts/gerar-blog.js
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../input');
const outputFile = path.join(__dirname, '../blog-convertido.ts');

// Função para aplicar as classes do Tailwind automaticamente
function aplicarEstilos(html) {
  let formatado = html;
  
  // Títulos
  formatado = formatado.replace(/<h2>/g, '<h2 class="font-display text-2xl text-text-primary font-semibold mt-8 mb-4">');
  formatado = formatado.replace(/<h3>/g, '<h3 class="font-display text-xl text-accent font-semibold mt-6 mb-2">');
  
  // Parágrafos (adiciona classe se não tiver)
  formatado = formatado.replace(/<p>/g, '<p class="mb-4">');
  
  // Listas
  formatado = formatado.replace(/<ul>/g, '<ul class="list-disc pl-5 space-y-2 text-text-secondary mb-6">');
  formatado = formatado.replace(/<ol>/g, '<ol class="list-decimal pl-5 space-y-3 text-text-secondary mb-6">');
  
  // Citações
  formatado = formatado.replace(/<blockquote>/g, '<blockquote class="border-l-4 border-accent pl-4 italic text-text-primary my-8 bg-accent-light/20 py-4 px-6 rounded-r-lg text-lg">');
  
  // Limpeza de tags de estrutura que não queremos no meio do texto
  formatado = formatado.replace(/<\/?(html|body|head|meta|title|link|script|style|div|span)[^>]*>/gi, '');
  
  return formatado.trim();
}

// Ler arquivos da pasta input
const arquivos = fs.readdirSync(inputDir).filter(f => f.endsWith('.html') || f.endsWith('.txt'));

if (arquivos.length === 0) {
  console.log('Nenhum arquivo encontrado na pasta input/');
  process.exit(1);
}

let output = `// Gerado automaticamente pelo script gerar-blog.js\n\nexport const novosArtigos = [\n`;

arquivos.forEach((arquivo, index) => {
  const caminho = path.join(inputDir, arquivo);
  const conteudoBruto = fs.readFileSync(caminho, 'utf-8');
  
  // Tenta extrair o título do H1, se não tiver, usa o nome do arquivo
  const tituloMatch = conteudoBruto.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const titulo = tituloMatch ? tituloMatch[1].replace(/<[^>]+>/g, '').trim() : arquivo.replace(/\.(html|txt)$/, '');
  
  // Extrai o resto do conteúdo (remove o H1 para não duplicar)
  let conteudo = tituloMatch ? conteudoBruto.replace(/<h1[^>]*>.*?<\/h1>/i, '') : conteudoBruto;
  
  const conteudoFormatado = aplicarEstilos(conteudo);

  output += `  {\n`;
  output += `    slug: "${titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}",\n`;
  output += `    title: "${titulo}",\n`;
  output += `    category: "Categoria", // Preencher manualmente\n`;
  output += `    date: "Data", // Preencher manualmente\n`;
  output += `    readTime: "5 min",\n`;
  output += `    emoji: "📝",\n`;
  output += `    excerpt: "Resumo do artigo aqui.",\n`;
  output += `    content: \`\n${conteudoFormatado}\n    \`\n`;
  output += `  },\n`;
});

output += `];\n`;

fs.writeFileSync(outputFile, output);
console.log(`✅ Sucesso! ${arquivos.length} artigo(s) convertido(s).`);
console.log(` Abra o arquivo 'blog-convertido.ts' na raiz do projeto e copie o conteúdo.`);
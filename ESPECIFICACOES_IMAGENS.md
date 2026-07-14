Aqui está o guia completo e definitivo de especificações técnicas para as imagens do site da Psicóloga Fabíola. Copie este conteúdo e salve em um arquivo chamado `ESPECIFICACOES_IMAGENS.md` na raiz do seu projeto ou na pasta `_referencia/`.

***

#  Guia Técnico de Imagens e Assets - Template Psicóloga Sereno Premium

Este documento contém todas as medidas, formatos e diretrizes visuais necessárias para substituir os placeholders (Picsum) pelas fotos reais da cliente e garantir a performance máxima no Google PageSpeed e Core Web Vitals.

## 1. Favicon e Ícones de Navegador
Esses arquivos devem ser salvos **diretamente na pasta `/public`** do projeto Astro (não dentro de `/src`). O nome dos arquivos deve corresponder exatamente ao que está configurado no `BaseLayout.astro`.

| Asset | Formato Recomendado | Medidas Exatas | Nome do Arquivo | Observação Técnica |
| :--- | :--- | :--- | :--- | :--- |
| **Favicon Principal** | SVG | Vetorial (qualquer tamanho) | `favicon-fabiola-psicologa.svg` | Preferível para telas retina. Fundo transparente. Cores: Verde Sálvia (#4A6C6F) e Off-white. |
| **Favicon Fallback** | PNG | 32x32 px | `favicon-32.png` | Compatibilidade com navegadores antigos. Fundo sólido #FAFAF9. |
| **Apple Touch Icon** | PNG | 180x180 px | `apple-touch-icon.png` | Para iPhones/iPads. Bordas arredondadas automáticas pelo iOS. Sem transparência. |
| **Android Chrome** | PNG | 512x512 px | `android-chrome-512.png` | Para tela inicial de Androids. Deve ter margem segura de 24px nas bordas. |

> **💡 Dica Pro:** Se a cliente não tiver logo vetorial, use uma versão simplificada das iniciais "FM" em tipografia serifada (Playfair Display) dentro de um círculo sutil. Evite logos complexos com textos pequenos, pois ficam ilegíveis em 32px.

## 2. Fotos Principais do Site
Todas as fotos devem passar por compressão antes do upload. Use ferramentas como [Squoosh.app](https://squoosh.app) ou [TinyPNG](https://tinypng.com).

### Hero Section (Primeira Impressão)
*   **Formato:** WebP (primário) + JPG (fallback)
*   **Medidas Desktop:** 800x1000 px (Proporção 4:5 vertical)
*   **Medidas Mobile:** 600x750 px (Crop centralizado)
*   **Tamanho Máximo:** 150 KB
*   **Diretriz Visual:** Foto profissional da psicóloga sorrindo levemente, olhando para a câmera ou ligeiramente para o lado. Fundo desfocado (bokeh) em tons neutros/bege. Transmite acolhimento e confiança. Evitar braços cruzados (postura fechada).
*   **Nome Sugerido:** `hero-psicologa.webp`

### Seção "Quem Sou Eu" (Autoridade)
*   **Formato:** WebP
*   **Medidas:** 600x750 px (Proporção 4:5)
*   **Tamanho Máximo:** 120 KB
*   **Diretriz Visual:** Foto em meio-corpo ou corpo inteiro, em ambiente natural ou consultório. Pode estar segurando um caderno, xícara de chá ou sentada confortavelmente. Postura relaxada e humana. Diferente da foto da Hero para não parecer repetitivo.
*   **Nome Sugerido:** `about-psicologa.webp`

### Imagem de Placeholder do Mapa
*   **Formato:** JPG (baixa qualidade é aceitável pois tem overlay blur)
*   **Medidas:** 800x800 px
*   **Tamanho Máximo:** 80 KB
*   **Diretriz Visual:** Print estilizado do Google Maps mostrando o pino na R. José Evaristo Fogaça, OU foto aérea do bairro Vila Moema. Como tem um overlay escuro por cima, pode ser mais escura e contrastada.
*   **Nome Sugerido:** `mapa-localizacao.jpg`

### Open Graph / Social Share (WhatsApp/Facebook)
*   **Formato:** JPG ou PNG
*   **Medidas:** 1200x630 px (Proporção 1.91:1 padrão OG)
*   **Tamanho Máximo:** 300 KB
*   **Diretriz Visual:** Card gráfico contendo: Foto da psicóloga à esquerda + Título "Psicóloga Fabíola Medeiros" + Subtítulo "Terapia Presencial e Online" + CRP 12/26596 + Logo/Ícone sutil. Fundo off-white (#FAFAF9). Esta imagem aparece quando o link é compartilhado.
*   **Nome Sugerido:** `og-image.jpg` *(Salvar na pasta `/public`)*

## 3. Checklist de Qualidade e Performance

Antes de fazer o deploy final, verifique cada imagem nesta lista:

- [ ] **Nenhuma imagem excede 200 KB** (exceto OG Image que pode ir até 300KB)
- [ ] **Todas as fotos de pessoas estão em formato WebP** (melhor compressão sem perda visual)
- [ ] **Favicon SVG está na pasta `/public`** e o nome bate com o código
- [ ] **OG Image está na pasta `/public`** (não em `/src/assets`)
- [ ] **Imagens têm atributo `alt` descritivo** no código (ex: `alt="Psicóloga Fabíola Medeiros atendendo"` e NÃO `alt="foto1"`)
- [ ] **Hero image tem `loading="eager"`** (carrega imediatamente, crucial para LCP)
- [ ] **Demais imagens têm `loading="lazy"`** (carregam só quando aparecem na tela)
- [ ] **Nenhuma foto tem texto embutido na imagem** (textos devem ser HTML/CSS para SEO e acessibilidade)
- [ ] **Rosto da psicóloga está nítido e bem iluminado** (evitar sombras duras no rosto)
- [ ] **Cores das fotos harmonizam com a paleta** (tons quentes, bege, verde sálvia; evitar cores neon ou saturação excessiva)

## 4. Estrutura de Pastas Recomendada

```
meu-template-psicologos/
├── public/
│   ├── favicon-fabiola-psicologa.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-512.png
│   └── og-image.jpg          ← Importante: OG image vai aqui!
├── src/
│   ├── assets/
│   │   ├── hero-psicologa.webp
│   │   ├── about-psicologa.webp
│   │   └── mapa-localizacao.jpg
│   └── ...
```

> **⚠️ Atenção:** No Astro, imagens dentro de `/src/assets/` são otimizadas automaticamente pelo Vite. Imagens dentro de `/public/` são servidas como estão. Por isso, o **OG Image e Favicons** vão em `/public/` (precisam de URL fixa), mas as **fotos do conteúdo** vão em `/src/assets/` (para otimização automática).

## 5. O Que EVITAR 

- **Fotos de banco de imagens genéricas** (pessoas perfeitas demais, sorrisos artificiais). Pacientes de psicologia buscam autenticidade.
- **Imagens com marca d'água** de fotógrafo ou banco de imagens.
- **Fotos horizontais cortadas para vertical** (perdem resolução e ficam pixeladas no mobile).
- **PNGs pesados acima de 500KB** para fotos (PNG só serve para logos/ícones com transparência).
- **Colocar OG Image em `/src/assets/`** (o Astro vai hashar o nome do arquivo e quebrar o link do Open Graph).

***

**📌 Salve este arquivo.** Quando receber as fotos da cliente, siga este guia passo a passo. Com essas especificações, o site terá nota 95+ no PageSpeed Insights e aparecerá com destaque nos resultados do Google.
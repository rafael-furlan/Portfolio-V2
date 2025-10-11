# Guia de Uso - Cursor Customizado com SVG

## Visão Geral

O componente `CustomCursor` foi atualizado para suportar SVG nos tipos de cursor existentes (`scroll`, `view`, `top`, `soon`). Agora cada tipo de cursor mostra um SVG padrão ao invés de texto, mas você pode customizar com seus próprios SVGs.

## Como Usar

### 1. Cursor com SVG Padrão (novo comportamento)

```jsx
// Agora todos os data-cursor mostram SVG ao invés de texto
<button data-cursor="scroll">Scroll</button>  // Mostra ícone de scroll
<button data-cursor="view">View</button>      // Mostra ícone de olho
<button data-cursor="top">Top</button>        // Mostra ícone de seta para cima
<button data-cursor="soon">Soon</button>      // Mostra ícone de relógio
```

### 2. Cursor com SVG Customizado

Para usar seu próprio SVG em cada tipo de cursor, use os atributos específicos:

```jsx
// SVG customizado para scroll
<button 
  data-cursor="scroll"
  data-cursor-svg-scroll='<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"/>
  </svg>'
>
  Scroll customizado
</button>

// SVG customizado para view
<button 
  data-cursor="view"
  data-cursor-svg-view='<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
  </svg>'
>
  View customizado
</button>
```

### 3. Cursor Oculto

```jsx
// Para esconder o cursor customizado
<div data-cursor="hidden">Este elemento esconde o cursor</div>
```

## SVGs Padrão

Cada tipo de cursor agora tem um SVG padrão:

- **`data-cursor="scroll"`**: Ícone de setas duplas (scroll)
- **`data-cursor="view"`**: Ícone de olho (visualizar)
- **`data-cursor="top"`**: Ícone de seta para cima (voltar ao topo)
- **`data-cursor="soon"`**: Ícone de relógio (em breve)

## Estrutura do Código

### Estados do Cursor

```jsx
const [cursorType, setCursorType] = useState('text'); // 'text' ou 'svg'
const [svgContent, setSvgContent] = useState(null);
const [text, setText] = useState('');
```

### SVGs Padrão Definidos

```jsx
const defaultSvgs = {
  scroll: '<svg>...</svg>', // Ícone de scroll
  view: '<svg>...</svg>',   // Ícone de olho
  top: '<svg>...</svg>',    // Ícone de seta para cima
  soon: '<svg>...</svg>'    // Ícone de relógio
};
```

### Lógica de Detecção

O cursor detecta automaticamente se um elemento tem:
- `data-cursor-svg`: Mostra SVG
- `data-cursor="scroll|view|top|soon"`: Mostra texto
- `data-cursor="hidden"`: Esconde o cursor
- Nenhum atributo: Cursor padrão (sem texto/SVG)

### Renderização Condicional

```jsx
{cursorType === 'svg' && svgContent ? (
  <div 
    className="w-6 h-6 flex items-center justify-center"
    dangerouslySetInnerHTML={{ __html: svgContent }}
  />
) : (
  text
)}
```

## Exemplos Práticos

### Ícone de Download
```jsx
<button 
  data-cursor-svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2"/>
    <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
    <path d="M12 15V3" stroke="currentColor" stroke-width="2"/>
  </svg>'
>
  Download
</button>
```

### Ícone de Visualizar
```jsx
<div 
  data-cursor-svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
  </svg>'
>
  Ver projeto
</div>
```

### Ícone de Link Externo
```jsx
<a 
  href="#"
  data-cursor-svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2"/>
    <path d="M15 3H21V9" stroke="currentColor" stroke-width="2"/>
    <path d="M10 14L21 3" stroke="currentColor" stroke-width="2"/>
  </svg>'
>
  Link externo
</a>
```

## Dicas Importantes

1. **Tamanho do SVG**: O SVG é renderizado em um container de 24x24px (w-6 h-6)
2. **Cores**: Use `stroke="currentColor"` para que o SVG herde a cor do texto
3. **Performance**: SVGs inline são mais performáticos que imagens
4. **Acessibilidade**: Mantenha os SVGs semânticos e acessíveis
5. **Fallback**: O sistema sempre volta para texto se não encontrar SVG

## Compatibilidade

- ✅ Funciona com todos os navegadores modernos
- ✅ Compatível com React 16.8+
- ✅ Suporte a SVG inline
- ✅ Mantém compatibilidade com sistema de texto existente

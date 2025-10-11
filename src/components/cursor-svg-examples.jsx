import React from 'react';

// Exemplos de como usar SVGs no cursor customizado
export default function CursorSvgExamples() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Exemplos de Cursor com SVG</h1>
      
      {/* Exemplo 1: data-cursor="scroll" com SVG padrão */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">data-cursor="scroll" com SVG padrão</h2>
        <button 
          data-cursor="scroll"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Scroll com SVG padrão
        </button>
      </div>

      {/* Exemplo 2: data-cursor="scroll" com SVG customizado */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">data-cursor="scroll" com SVG customizado</h2>
        <button 
          data-cursor="scroll"
          data-cursor-svg-scroll='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>'
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Scroll com SVG customizado
        </button>
      </div>

      {/* Exemplo 3: data-cursor="view" com SVG padrão */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">data-cursor="view" com SVG padrão</h2>
        <button 
          data-cursor="view"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          View com SVG padrão
        </button>
      </div>

      {/* Exemplo 4: data-cursor="top" com SVG padrão */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">data-cursor="top" com SVG padrão</h2>
        <button 
          data-cursor="top"
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
        >
          Top com SVG padrão
        </button>
      </div>

      {/* Exemplo 5: data-cursor="soon" com SVG padrão */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">data-cursor="soon" com SVG padrão</h2>
        <button 
          data-cursor="soon"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Soon com SVG padrão
        </button>
      </div>

      {/* Exemplo 3: Card com ícone de olho */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Card com ícone de visualizar</h2>
        <div 
          data-cursor-svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>'
          className="p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <h3 className="font-semibold">Projeto Exemplo</h3>
          <p className="text-gray-600">Passe o mouse para ver o ícone de visualizar</p>
        </div>
      </div>

      {/* Exemplo 4: Botão de download */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Botão de download</h2>
        <button 
          data-cursor-svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>'
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Download
        </button>
      </div>

      {/* Exemplo 5: Elemento com cursor oculto */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Elemento com cursor oculto</h2>
        <div 
          data-cursor="hidden"
          className="p-4 bg-red-100 rounded-lg"
        >
          Este elemento esconde o cursor customizado
        </div>
      </div>

      {/* Exemplo 6: Texto normal (cursor padrão) */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Texto normal</h2>
        <p className="text-gray-700">
          Este texto usa o cursor padrão (sem texto ou SVG)
        </p>
      </div>
    </div>
  );
}

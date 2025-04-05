// LinhasStatus.tsx
'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './linhas.css';

interface LinhaStatus {
  id: number;
  nome: string;
  cor: string;
  next?: string;
  status: 'Operação Normal' | 'Circulação de Trens';
  capacidade: {
    muitaLotacao: string;
    mediaLotacao: string;
    baixaLotacao: string;
  };
  empresaAdmin: string;
}


const LinhasStatus: React.FC = () => {
  const [linhaExpandida, setLinhaExpandida] = useState<number | null>(null);
  const [horaAtualizado, setHoraAtualizado] = useState<string>('');
  const [linhas, setLinhas] = useState<LinhaStatus[]>([
    {
      id: 1,
      nome: 'Azul',
      cor: 'azul',
      status: 'Circulação de Trens',
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'empresa_metro_icone.png'
    },
    {
      id: 2,
      nome: 'Verde',
      cor: 'verde',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'empresa_metro_icone.png'
    },
    {
      id: 3,
      nome: 'Vermelha',
      cor: 'vermelha',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'empresa_metro_icone.png'
    },
    {
      id: 4,
      nome: 'Amarela',
      cor: 'amarela',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'viaquatro.png'
    },
    {
      id: 5,
      nome: 'Lilás',
      cor: 'lilas',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'Linha_Lilas_Viamobilidade.png'
    },
    {
      id: 7,
      nome: 'Rubi',
      cor: 'rubi',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'Cptm.png'
    },
    {
      id: 8,
      nome: 'Diamante',
      cor: 'diamante',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'viamobilidade.png'
    },
    {
      id: 9,
      nome: 'Esmeralda',
      cor: 'esmeralda',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'viamobilidade.png'
    },
    {
      id: 10,
      nome: 'Turquesa',
      cor: 'turquesa',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'Cptm.png'
    },
    {
      id: 11,
      nome: 'Coral',
      cor: 'coral',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'Cptm.png'
    },
    {
      id: 12,
      nome: 'Safira',
      cor: 'safira',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'Cptm.png'
    },
    {
      id: 13,
      nome: 'Jade',
      cor: 'jade',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'Cptm.png'
    },
    {
      id: 15,
      nome: 'Prata',
      cor: 'prata',
      status: 'Operação Normal',
      next: "15",
      capacidade: { muitaLotacao: '1', mediaLotacao: '2 e 3', baixaLotacao: '4 e 5' },
      empresaAdmin: 'empresa_metro_icone.png'
    },
  ]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        // Chamada para API de linhas
        const responseLinhas = await fetch('https://stunning-lamp-q7pvpv95g59vf6xgp-8501.app.github.dev/api/linhas');
        const dataLinhas = await responseLinhas.json();
  
        // Chamada para API de trem
        const responseTrem = await fetch('https://stunning-lamp-q7pvpv95g59vf6xgp-8501.app.github.dev/api/trem');
        const dataTrem = await responseTrem.json();
        const horaPrevista = dataTrem.hora_previsto_chegada;
  
        const mapeamentoIds: { [key: number]: string } = {
          1: 'linha1',
          2: 'linha2',
          3: 'linha3',
          4: 'linha4',
          5: 'linha5',
          7: 'linha7',
          8: 'linha8',
          9: 'linha9',
          10: 'linha10',
          11: 'linha11',
          12: 'linha12',
          13: 'linha13',
          15: 'linha15'
        };
  
        const linhasAtualizadas = linhas.map((linha) => {
          const chaveApi = mapeamentoIds[linha.id];
          const statusDaLinha = chaveApi && dataLinhas[chaveApi] ? dataLinhas[chaveApi].status : 'Status Desconhecido';
  
          return {
            ...linha,
            status: statusDaLinha,
            next: linha.id === 1 ? horaPrevista : linha.next // só atualiza next para a linha 1
          };
        });
  
        setLinhas(linhasAtualizadas);
  
        if (dataLinhas.hora_atualizado) {
          setHoraAtualizado(dataLinhas.hora_atualizado);
        }
  
      } catch (error) {
        console.error('Erro ao buscar dados das APIs:', error);
      }
    };
  
    fetchDados();
  }, []);


  const toggleExpandir = (id: number) => {
    setLinhaExpandida(linhaExpandida === id ? null : id);
  };

  return (
    <div className="linhas-container">
      <header className="status-header">
        <h1>Linhas de Metro SP</h1>
        <p className="atualizacao">Operações atualizadas em tempo real</p>
      </header>

      <div className="lista-linhas">
        {linhas.map((linha) => (
          <div key={linha.id} className="linha-item">
            <div className="cabecalho-linha" onClick={() => toggleExpandir(linha.id)}>
              <div className="info-esquerda">
                <img
                  src={linha.empresaAdmin}
                  alt="Empresa administradora"
                  className="icone-empresa"
                />
                <div className={`indicador-status ${linha.status === 'Operação Normal' ? 'verde' : 'vermelho'}`} />
                <span className="numero-linha">{linha.id}</span>
                <h2 className="nome-linha">{linha.nome}</h2>
              </div>

              <div className="controles-direita">
                <span className={`seta ${linhaExpandida === linha.id ? 'aberta' : ''}`}></span>
              </div>
            </div>

            {linhaExpandida === linha.id && (
              <div className="detalhes-linha">
                <div className="status-capacidade">
                  <h3>Status da capacidade</h3>
                  <p>Linha {linha.nome}</p>
                </div>

                <div className="proximo-trem">
                  <h3>Próximo metrô (sentido Itapevi) <br /> {linha.next}</h3>
                  <div className="trem-container">
                    <img
                      src="grupo_trem.png"
                      alt="Composição do trem"
                      className="imagem-trem"
                    />

                    <table className="tabela-lotacao">
                      <tbody>
                        <tr>
                          <td>Muita Lotação</td>
                          <td>{linha.capacidade.muitaLotacao}</td>
                        </tr>
                        <tr>
                          <td>Media Lotação</td>
                          <td>{linha.capacidade.mediaLotacao}</td>
                        </tr>
                        <tr>
                          <td>Baixa Lotação</td>
                          <td>{linha.capacidade.baixaLotacao}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <h3>Última atualização: {horaAtualizado}</h3>
      </div>
    </div>
  );
};

export default LinhasStatus;
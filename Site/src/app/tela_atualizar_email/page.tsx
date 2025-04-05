'use client'

import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';

const UpdateEmailScreen = () => {
  return (
    <main className="email-update-screen">
      <h1 className="email-update-title">Atualizar endereço de e-mail</h1>
      
      <div className="email-update-content">
        <div className="current-email-section">
          <p className="current-email-text">Seu e-mail atual é usuario@*****.com</p>
          <p className="disclaimer-text">
            A alteração do e-mail requer confirmação por mensagem enviada para o novo endereço
          </p>
        </div>

        <div className="divider-line" />

        <form className="email-update-form">
          <div className="input-group">
            <label htmlFor="new-email">Novo e-mail</label>
            <input
              type="email"
              id="new-email"
              className="email-input"
              placeholder="Digite o novo e-mail"
            />
          </div>
          
          <Link href="/pagina_perfil"><Botao texto="Atualizar agora"></Botao></Link>
        </form>

        <Link href="/pagina_perfil"><Botao texto="Cancelar"></Botao></Link>
      </div>
    </main>
  );
};

export default UpdateEmailScreen;
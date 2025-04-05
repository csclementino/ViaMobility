// app/tela_confirmacao_senha/page.tsx
'use client'

import Link from 'next/link';
import Botao from '@/components/botaoGradienteVerdeAzul/page';
import TituloAzul from '@/components/TituloAzul/page';

const PasswordConfirmationScreen = () => {
  return (

    <main className="confirmation-screen">
      <div className="confirmation-content">
        <TituloAzul texto="Sua senha foi atualizada com sucesso!"/>
        
        <p className="confirmation-text">
          Por favor, tente entrar novamente agora com a nova senha cadastrada!
        </p>

        <div className="divider-line"></div>

        <Link href="/credenciais"><Botao texto="Login"></Botao></Link>
      </div>
    </main>
  );
};

export default PasswordConfirmationScreen;
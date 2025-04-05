// app/tela_excluir_conta/page.tsx
'use client'

import Link from 'next/link';

const DeleteAccountScreen = () => {
  const handleDeleteAccount = () => {
    console.log('Conta excluída');
  };

  return (
    <main className="delete-account-screen">    

      <div className="confirmation-content">
        <h1 className="confirmation-title">
          Tem certeza que deseja excluir sua conta?
        </h1>
        
        <p className="warning-text">
          Esta ação é irreversível! Todos os seus dados serão permanentemente removidos.
        </p>

        <div className="divider-line"></div>

        <Link href="/"><button 
          onClick={handleDeleteAccount}
          className="delete-confirm-button"
        >
          Confirmar Exclusão
        </button></Link>

        <Link href="/pagina_perfil" className="cancel-link">
          Cancelar
        </Link>
      </div>
    </main>
  );
};

export default DeleteAccountScreen;
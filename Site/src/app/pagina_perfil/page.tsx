'use client'

import Navegacao from '@/components/barra_navegacao/page';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { UserProfile } from '@/data/types';
import ProfileField from '@/components/pagina_perfil/page';
import Link from 'next/link';
import '@/app/globals.css';

const ProfileScreen = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<UserProfile>({
    id: '1',
    profileImage: '/icone_usuario.png',
    firstName: 'Nome',
    lastName: 'Sobrenome',
    phone: '1199994455',
    email: 'usuario@email.com',
    isEmailVerified: true
  });

  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            const newImage = event.target.result.toString();
            setProfileImage(newImage);
            setUser(prev => ({ ...prev, profileImage: newImage }));
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor, selecione um arquivo de imagem válido.');
      }
    }
  };


  const handleFieldChange = (field: keyof UserProfile, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="profile-container">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handlePhotoChange}
        className="hidden"
      />

      <div className="avatar-section">
        <div className="avatar-container">
          <div className="avatar-image-wrapper">
            <Image
              src={profileImage}
              alt="Foto do perfil"
              width={120}
              height={120}
              className="profile-avatar"
            />
          </div>
          <button
            type="button"
            className="change-photo-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            Alterar foto
          </button>
        </div>
      </div>

      <div className="profile-form">
        <ProfileField
          label="Nome"
          type="text"
          value={user.firstName}
          editable={false}
        />

        <ProfileField
          label="Sobrenome"
          type="text"
          value={user.lastName}
          editable={false}
        />

        <ProfileField
          label="Telefone"
          type="phone"
          value={user.phone}
          actionLabel="Alterar"
          actionPath="/tela_atualizar_telefone"
        />

        <ProfileField
          label="E-mail"
          type="email"
          value={user.email}
          actionLabel="Alterar"
          actionPath="/tela_atualizar_email"
          isVerified={user.isEmailVerified}
        />

        <ProfileField
          label="Senha"
          type="password"
          value="********"
          actionLabel="Alterar"
          actionPath="/criar_nova_senha"
        />
      </div>

      <div className="delete-section">
        <Link href="/excluir_conta"><button
          type="button"
          className="delete-account-btn"
          onClick={() => console.log('Excluir conta')}
        >
          Excluir conta
        </button></Link>
      </div>

      <Navegacao />
    </div>
  );
};

export default ProfileScreen;
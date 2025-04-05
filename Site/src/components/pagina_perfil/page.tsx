'use client'

import React, { useState } from 'react';
import { ProfileFieldType } from '@/data/types';
import '@/app/globals.css';
import Link from 'next/link';


interface ProfileFieldProps {
  label: string;
  type: ProfileFieldType;
  editable?: boolean;
  value: string;
  actionLabel?: string;
  actionPath?: string;
  isVerified?: boolean;
  onUpdate?: (value: string) => void;
  onAction?: () => void;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  editable = true,
  label,
  type,
  value,
  actionLabel,
  actionPath,
  isVerified = false,
  onUpdate,
  onAction
}) => {
  const [fieldValue, setFieldValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFieldValue(newValue);
    if (onUpdate) onUpdate(newValue);
  };

  return (
    <div className="profile-field">
      <label className="field-label">{label}</label>

      <div className="field-content">
        {type === 'text' && editable ? (
          <input
            type="text"
            value={fieldValue}
            onChange={handleChange}
            className="editable-input"
          />
        ) : (
          <span className="field-value">{fieldValue}</span>
        )}

        {actionLabel && actionPath && (
          <Link
            href={actionPath}
            className={`action-btn ${isVerified ? 'verified' : ''}`}
          >
            {actionLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileField;
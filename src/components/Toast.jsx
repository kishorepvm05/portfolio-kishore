import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={18} className="text-emerald-400" style={{ color: '#10b981' }} />,
    error: <AlertCircle size={18} className="text-rose-400" style={{ color: '#f43f5e' }} />,
    info: <Info size={18} className="text-sky-400" style={{ color: '#38bdf8' }} />
  };

  return (
    <div className="toast-container">
      <div className="toast">
        {icons[toast.type] || icons.info}
        <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>
          {toast.message}
        </span>
        <button 
          onClick={onClose} 
          style={{ marginLeft: 'auto', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}
          aria-label="Dismiss notice"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

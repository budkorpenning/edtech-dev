'use client'

// Declare the custom UC_UI type on window directly in this file
declare global {
  interface Window {
    UC_UI?: {
      showSecondLayer: () => void
    }
  }
}

export default function PrivacyButton() {
  return (
    <button
      type="button"
      className="underline"
      onClick={() => {
        if (typeof window !== 'undefined' && window.UC_UI?.showSecondLayer) {
          window.UC_UI.showSecondLayer()
        }
      }}
    >
      Privacy settings
    </button>
  )
}

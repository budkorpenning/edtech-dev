'use client'

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

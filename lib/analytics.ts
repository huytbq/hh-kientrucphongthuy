export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
    ;(window as unknown as { gtag: (cmd: string, event: string, params?: Record<string, unknown>) => void }).gtag('event', eventName, params)
  }
}

export const GA_EVENTS = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CALL_CLICK: 'call_click',
  ZALO_CLICK: 'zalo_click',
  SERVICE_VIEW: 'service_view',
  CTA_CLICK: 'cta_click',
}

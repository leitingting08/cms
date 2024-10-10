import { LanguageProvider } from './Localization'
import { ToastsProvider } from './ToastsContext/Provider'
import ModalProvider from './ModalContext/Provider'

const Providers: React.FC<any> = ({ children }) => {
  return (
    <LanguageProvider>
      <ToastsProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastsProvider>
    </LanguageProvider>
  )
}

export default Providers

import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'
import { Button } from '@mui/material'

const NotFound = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className="py-20 px-6 md:p-32">
      <div>404</div>
      <div className="text-xl py-4">{t('Oops, page not found.')}</div>
      <Button onClick={() => router.push('/')}>{t('Back Home')}</Button>
    </div>
  )
}
export default NotFound

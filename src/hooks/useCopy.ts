import { useCallback } from 'react'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'

const useCopy = () => {
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const copyContent = useCallback(
    (content: string) => {
      if (navigator.clipboard && navigator.permissions) {
        navigator.clipboard.writeText(content).then(() => toastSuccess(t('Copy Success')))
      } else if (document.queryCommandSupported('copy')) {
        const ele = document.createElement('textarea')
        ele.value = content
        document.body.appendChild(ele)
        ele.select()
        document.execCommand('copy')
        document.body.removeChild(ele)
        toastSuccess(t('Copy Success'))
      }
    },
    [toastSuccess, t]
  )
  return {
    copyContent
  }
}

export default useCopy

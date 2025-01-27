'use client'
import CustomH1 from '@/components/ui/CustomH1'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <div className=''>
      <CustomH1>{t("main")}</CustomH1>
    </div>
  )
}

export default HomePage
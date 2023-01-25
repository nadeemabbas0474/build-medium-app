import ReadersNav from '@/components/ReadersNav'
import Recommendations from '@/components/Recommendations'
import React from 'react'

const style = {
  content: "flex",
}
export default function Post() {
  return (
    <div className={style.content}>
      <ReadersNav/>
      <div>
        Article Main Will Go Here
      </div>
      <Recommendations />
    </div>
  )
}
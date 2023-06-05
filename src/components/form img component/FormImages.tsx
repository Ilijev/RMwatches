import React from 'react'

type Props = {img?:string}

export default function FormImages({img}: Props) {
  return (
    <img src={img} alt={"testtest"}></img>
  )
}
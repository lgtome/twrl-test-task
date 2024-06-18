import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { RedirectProps } from './Redirect.types'

export const Redirect: FC<RedirectProps> = ({ path = '/' }) => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(path)
    })
    return null
}

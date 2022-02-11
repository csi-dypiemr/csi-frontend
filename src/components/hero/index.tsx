import React, { useState} from 'react'

import { Button, Header, Logo } from '@components'
import Script from 'next/script'
export const Hero: React.FC = () => {
  const [stripe, setStripe] = useState(null)
  return (
    <div>
      <Script
        id="stripe-js"
        src="https://js.stripe.com/v3/"
        onLoad={() => {
          setStripe({ stripe: window.Stripe('pk_test_12345') })
        }}
      />
    </div>
  )
}

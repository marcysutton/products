import React from 'react'
import Image from 'next/image'
import {useConvertkit} from '@skillrecordings/convertkit'
import config from '../../config'

const ConfirmEmailPage: React.FC = () => {
  const {subscriber} = useConvertkit()

  return (
    <div data-sr-confirm-email="free-chapter">
      <article>
        <header>
          <Image
            src={'/images/email-notification.svg'}
            width={100}
            height={100}
          />
          <h1>Check your inbox</h1>
          <h2>
            A link to "The Value of Values" chapter just got sent to{' '}
            {subscriber?.email_address && <b>{subscriber.email_address}</b>}.
          </h2>
        </header>
        <div>
          <p>
            If you don't see the email after a few minutes, you might check your
            spam folder or other filters and add <code>{config.email}</code> to
            your contacts.
          </p>
        </div>
        <footer>
          <i>Thanks,</i>
          <Image
            width={60}
            height={60}
            alt="Sarah's signature"
            aria-hidden="true"
            src={'/images/signature.svg'}
          />
        </footer>
      </article>
    </div>
  )
}

export default ConfirmEmailPage
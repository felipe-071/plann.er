import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';
import { DateRange } from 'react-day-picker';

export function CreateTripPage() {

  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsMoldalOpen, setIsGuestsMoldalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const[eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()


  const [emailsToInvite, setEmailsToInvite] = useState(['diego@rocketseat.com.br', 'felipefelxg@gmail.com']);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsMoldalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsMoldalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) { // Especificar o tipo de evento é exclusivo do TS
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }
    console.log(email)

    setEmailsToInvite([
      ...emailsToInvite, email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log(destination)
    console.log(eventStartAndEndDates)
    console.log(emailsToInvite)
    console.log(ownerName)
    console.log(ownerEmail)
    // navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          
        <DestinationAndDateStep 
          closeGuestsInput={closeGuestsInput}
          isGuestsInputOpen={isGuestsInputOpen}
          openGuestsInput={openGuestsInput}
          setDestination={setDestination}
          eventStartAndEndDates={eventStartAndEndDates}
          setEventStartAndEndDates={setEventStartAndEndDates}
        />

          {isGuestsInputOpen && (
            <InviteGuestsStep 
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#"> termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a></p>
      </div>

      {isGuestsMoldalOpen && (
        <InviteGuestsModal 
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}
          />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
        closeConfirmTripModal={closeConfirmTripModal}
        createTrip={createTrip}
        setOwnerName={setOwnerName}
        setOwnerEmail={setOwnerEmail}
        />
      )}

    </div>
  )
}


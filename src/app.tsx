import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function App() {

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsMoldalOpen, setIsGuestsMoldalOpen] = useState(false);
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

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) { // Especificar o tipo de evento é exclusivo do TS
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }
    console.log(email)

    setEmailsToInvite([
      ...emailsToInvite, email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3"  >
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="flex items-center gap-2 w-48">
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-300 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            )
              : (<button onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Continuar
                <ArrowRight className="size-5" />
              </button>)
            }
          </div>


          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3"  >
              <button type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1 text-left">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#"> termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a></p>
      </div>

      {isGuestsMoldalOpen && (
        <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                  <X onClick={closeGuestsModal}
                    className="size-5 text-zinc-400 hover:cursor-pointer" />
                </div>
                <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem</p>
              </div>


              <div className="flex flex-wrap gap-2">


                {emailsToInvite.map(email => {
                  return (
                    // A key neste caso pode ser o próprio email, uma vez que implementar uma validação
                    // para conferir se o usuário quer adicionar um email já inserido se encaixa neste
                    // caso
                    <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                      <span className="text-zinc-300">{email}</span>
                      <button onClick={() => removeEmailFromInvites(email)} type="button">
                        <X className="size-4 text-zinc-400" />
                      </button>
                    </div>
                  )
                })}

              </div>
              <div className="w-full h-px bg-zinc-800" />

              <form onSubmit={addNewEmailToInvite} className="flex items-center gap-3 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                <div className="flex px-2 items-center flex-1 gap-2">
                  <AtSign className="text-zinc-400 size-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite o e-mail do convidado"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>
                <button
                  type="submit"
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                  Convidar
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}


import { AtSign, X, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
    closeGuestsModal: () => void
    emailsToInvite: string[]
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
    removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({
    addNewEmailToInvite,
    closeGuestsModal,
    emailsToInvite,
    removeEmailFromInvites,
}: InviteGuestsModalProps) {
    return (
        <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                            <button type="button" onClick={closeGuestsModal}>
                                <X className="size-5 text-zinc-400 hover:cursor-pointer" />
                            </button>
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
                        <Button type="submit">
                            Convidar
                            <Plus className="size-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>)
}
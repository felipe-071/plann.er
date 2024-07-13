import { X, Tag, Calendar } from "lucide-react";

interface CreateActivityModalProps{
    closeCreateActivityModal: () => void,
}

export function CreateActivityModal({
    closeCreateActivityModal
}:CreateActivityModalProps){    
    return(
        <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
                <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                        <button type="button" onClick={closeCreateActivityModal}>
                          <X className="size-5 text-zinc-400 hover:cursor-pointer" />
                        </button>
                      </div>
                      <p className="text-sm text-zinc-400">Todos os convidados podem visualizar as atividades.</p>
                    </div>
      
      
                    <div className="flex flex-wrap gap-2">
      
                    </div>
      
                    <form className="space-y-3">
                      <div className="flex items-center gap-3 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <Tag className="text-zinc-400 size-5" />
                        <input
                          name="title"
                          placeholder="Qual a atividade?"
                          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                      </div>
      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-1 gap-3 h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <Calendar className="text-zinc-400 size-5" />
                        <input
                          type="datetime-local"
                          name="occurs_at"
                          placeholder="Data e horário da atividade"
                          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                      </div>

                      </div>
      
                      <button
                        type="submit"
                        className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 w-full justify-center hover:bg-lime-400">
                        Salvar atividade
                      </button>
                    </form>
                  </div>
                </div>
              </div>
    )
}
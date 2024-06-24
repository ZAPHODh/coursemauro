// import Image from 'next/image'

import { Header } from '@/components/Header'
import { ResultCollection } from '@/components/ResultCollection'
import { images } from '@/components/ResultCollection/mock/images'

export default function Home() {
    return (
        <main>
            <Header
                course="Iluminados sem segredos"
                description="descrição legal que que ta acontecendo vey meu deus caramba parece ta estranho"
            />
            <ResultCollection
                results={images}
                title="Resultados que voce irá alcançar"
            />
            <Header
                course="Iluminados sem segredos"
                description="descrição legal que que ta acontecendo vey meu deus caramba parece ta estranho"
            />
        </main>
    )
}

// import Image from 'next/image'

import { Header } from '@/components/Header'
import { ResultCollection } from '@/components/ResultCollection'

export default function Home() {
    return (
        <main>
            <Header
                course="Iluminados sem segredos"
                description="descrição legal"
            />
            <ResultCollection
                results={[]}
                title="Resultados que voce irá alcançar"
            />
        </main>
    )
}

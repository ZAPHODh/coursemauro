import { Biography } from '@/components/Biography'
import certifiedImage from '../../public/images/certified.webp'

import { Certified } from '@/components/Certified'
import { Header } from '@/components/Header'
import { ModuleCollection } from '@/components/ModuleCollection'
import { ResultCollection } from '@/components/ResultCollection'
import { images } from '@/components/ResultCollection/mock/images'
import { biography } from '@/components/Biography/mock'
import { PaymentPlan } from '@/components/PaymentPlan'

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
            <ModuleCollection
                modules={[
                    { name: 'INTRODUÇÃO', number: 1 },
                    { name: 'MONTAGEM', number: 2 },
                    { name: 'ERIÇADO', number: 3 },
                    { name: 'TÉCNICA', number: 4 },
                    { name: 'sleep', number: 6 },
                ]}
            />
            <Certified
                heading="Certificado"
                img={certifiedImage}
                description="teste"
            />
            <Biography biography={biography} />
            <PaymentPlan
                value={145}
                benefits={[
                    'beneficio ',
                    'beneficio ',
                    'beneficio ',
                    'beneficio ',
                    'beneficio ',
                    'beneficio ',
                ]}
            />
        </main>
    )
}

import { Biography } from '@/components/Biography'
import { Certified } from '@/components/Certified'
import { Header } from '@/components/Header'
import { ModuleCollection } from '@/components/ModuleCollection'
import { ResultCollection } from '@/components/ResultCollection'
import { PaymentPlan } from '@/components/PaymentPlan'
import { Footer } from '@/components/Footer'

import { modules } from '@/data/modulesData'
import { paymentData } from '@/data/paymentData'
import { resultCollectionData } from '@/data/resultCollectionData'
import { footerData } from '@/data/footerData'
import { certifiedData } from '@/data/certifiedData'
import { headerData } from '@/data/headerData'
import { biographyData } from '@/data/biographyData'

export default function Home() {
    return (
        <>
            <Header
                course={headerData.course}
                description={headerData.description}
            />
            <ResultCollection
                results={resultCollectionData.images}
                title={resultCollectionData.title}
            />
            <ModuleCollection modules={modules} />
            <Certified
                heading={certifiedData.heading}
                img={certifiedData.img}
                description={certifiedData.description}
            />
            <Biography biography={biographyData} />
            <PaymentPlan
                value={paymentData.value}
                benefits={paymentData.benefits}
            />
            <Footer name={footerData.name} medias={footerData.medias} />
        </>
    )
}

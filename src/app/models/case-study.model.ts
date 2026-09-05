export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    description: string;
    period?: string;
    services?: string;
    tags?: string[];
    thumbnail: string;
    externalUrl: string;
    showCase: boolean;
    featured?: boolean;
    client?: string;
    subhead?: string;
    context?: string;
    challenge?: string;
    deliverables?: string[];
    tasks?: string[];
    work?: {
        image: string;
        description: string;
    }[];
    metrics?: {
        number: string;
        text: string;
    }[];
    campaign?: {
        title: string;
        image: string;
    }[];
    videos?: {
        url: string;
        description: string;
    }[];
    mainVideo?: {
        url: string;
        description: string;
    };
    // results?: string[];
    // relatedServices?: string[];
    // created?: string;
    // creativeApproach?: string;

}

//wew make this so that we dont need to say workItems: any, in the components. Any would not detect any problem. 
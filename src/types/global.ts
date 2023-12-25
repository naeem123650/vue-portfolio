declare interface User {
    id? : number,
    name: string,
    technologies: string[],
    social_links: string[],
    is_active: boolean
}

declare interface Experience {
    id? : number,
    details: string[],
    user_id: number,
    is_active: boolean   
}

declare interface Education {
    id? : number,
    details: string[],
    user_id: number,
    is_active: boolean
}

declare interface skill {
    id? : number,
    details: string[],
    user_id: number,
    is_active: boolean
}

declare interface Testimonials {
    id? : number,
    details: string[],
    user_id: number,
    is_active: boolean   
}

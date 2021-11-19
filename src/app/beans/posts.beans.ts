export interface GoPost {
    id: number
    title: string;
    shortTitle: string;
    author: string;
    postedAt: string;
    filepath: string;
    tags?: any[];
    category?: string;
    isRecent?: boolean;
    isFeatured?: boolean;
}
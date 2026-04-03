export interface RelatedWorksDetails {
    title: string;
    description: string;
    author: string;
    relatedWorkLink: string;
}

export interface CMSRelatedWorksState {
    relatedWorks: RelatedWorksDetails[];
    isLoading: boolean;
}

const initialState: CMSRelatedWorksState = {
    relatedWorks: [],
    isLoading: false,
};

export default initialState;

export type PageTitleType = {
    mainTitle: string;
};

export type textSpecs = {
    base: number;
    increment: number;
    textType: string;
    text: string;
}

export type pageSpecs = {
    pageTitle: string;
    subtitle: string;
    hasImage: boolean;
}

export type TieredInfo = {
    listLevel1: string[];
    listLevel2: string[];
}

export type TableHeadData = {
    headerWidth: number;
    headerName: string;
}

export type courseRecord = {
    courseInfo: string[];
}
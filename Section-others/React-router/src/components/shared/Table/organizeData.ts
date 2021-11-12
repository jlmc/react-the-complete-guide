import {TableHeader} from "./Table";

export type IndexedHeaders = {
    [key: string]: TableHeader
}

export type OrganizedItem = {
    [key: string]: any
}

export function organizeData(data: any[], headers: TableHeader[], currentPage: number, itemsPerPage: number): [OrganizedItem[], IndexedHeaders, number] {
    const indexedHeaders: IndexedHeaders = {}

    headers.forEach(header => {
        indexedHeaders[header.key] = { ...header }
    })

    const headerKeysInOrder = Object.keys(indexedHeaders)

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key]
        })

        organizedItem.$original = item

        return organizedItem
    })

    const organizedDataPage: OrganizedItem[] = paginate(organizedData, currentPage, itemsPerPage);

    const totalPages = Math.ceil(organizedData.length / itemsPerPage)

    return [organizedDataPage, indexedHeaders, totalPages]
}

export const paginate = (array: OrganizedItem[], currentPage: number, itemsPerPage: number): OrganizedItem[] => {
    const pageNumber = (currentPage - 1) <= 0 ? 0 : currentPage - 1
    const starIndex = pageNumber * itemsPerPage;
    const endIndex = starIndex + itemsPerPage;
    return array.slice(pageNumber * itemsPerPage, endIndex)
}

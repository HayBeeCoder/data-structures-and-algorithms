const { Node, LinkedList } = require("./linkedLists")



describe("creating a LinkedList", () => {
    let linkedList
    // beforeEach(() => {
    // })

    beforeEach(() => {
        linkedList = new LinkedList()
    })
    
    it("should have its head property pointing null", () => {
        linkedList = new LinkedList()
        expect(linkedList.head).toBeNull()
    })
    
    it("should have data property of node pointing to null", () => {
        linkedList.addFirst("Abass")
        expect(linkedList.head.data).toEqual("Abass")
        
    })


    it("should have next property of node pointing to null", () => {
        linkedList.addFirst("Abass")
        expect(linkedList.head.next).toEqual(null)
    })

    it("should count property assigned to zero", () => {
        linkedList.addFirst("Abass")
        expect(linkedList.count).toBe(1)
    })
})

describe("Modifying the LinkedList", () => {
    let linkedList
    beforeEach(() => {
        linkedList = new LinkedList()
        linkedList.addFirst("Abass")
        linkedList.addFirst("Omowale")
    
    })

    it("should increment count by 1 when new Node is added", () => {
        expect(linkedList.count).toBe(2)
    })

    it("should give the correct last node data" , () => {
        linkedList.addLast("Adenuga")
        expect(linkedList.count).toBe(3)
    })  

    it("should assign node to empty linkedList head property" , () => {
        let privatelinkedList = new LinkedList()
        expect(() => privatelinkedList.addLast("Omowale")).not.toThrow()
    })
    // it("should have node with Omowale as data to be the last node", () => {
    //     expect(linkedList.peek()).toBe("Omowale")
    // })

})
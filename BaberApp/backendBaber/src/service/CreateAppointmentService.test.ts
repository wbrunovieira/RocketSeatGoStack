import * as CreateAppointmentService from "./CreateAppointmentService"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new CreateAppointmentService.default()
    })

    test("0", async () => {
        let inst2: any = new Date("01-13-2020")
        await inst.execute({ provider_id: "Credit Card Account", date: inst2 })
    })

    test("1", async () => {
        let inst2: any = new Date("01-01-2030")
        await inst.execute({ provider_id: "Checking Account", date: inst2 })
    })

    test("2", async () => {
        let inst2: any = new Date("01-01-2030")
        await inst.execute({ provider_id: "Credit Card Account", date: inst2 })
    })

    test("3", async () => {
        let inst2: any = new Date("32-01-2020")
        await inst.execute({ provider_id: "Checking Account", date: inst2 })
    })

    test("4", async () => {
        let inst2: any = new Date("32-01-2020")
        await inst.execute({ provider_id: "Credit Card Account", date: inst2 })
    })

    test("5", async () => {
        let inst2: any = new Date("")
        await inst.execute({ provider_id: "", date: inst2 })
    })
})

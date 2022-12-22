const { assert } = require("chai")
const { network, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe Staging Tests", function () {
        let deployer
        let fundMe
        const sendValue = ethers.utils.parseEther("0.1")
        beforeEach(async () => {
            deployer = (await getNamedAccounts()).deployer
            fundMe = await ethers.getContract("FundMe", deployer)
        })

        it("allows people to fund and withdraw", async function () {
            const fundTxResponse = await fundMe.fund({ value: sendValue })
            await fundTxResponse.wait(1)
            const withdrawTxResponse = await fundMe.withdraw()
            await withdrawTxResponse.wait(1)

            const endingFundMeBalance = await fundMe.provider.getBalance(
                fundMe.address
            )
            console.log(
                endingFundMeBalance.toString() +
                " should equal 0, running assert equal..."
            )
            assert.equal(endingFundMeBalance.toString(), "0")
        })
    })


    //   Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iste enim facilis eveniet obcaecati/*  */ tempore ab quam vel veritatis quidem excepturi, repellat, quasi rem ex doloremque itaque mollitia voluptas ? Expedita, reprehenderit ?
    // Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus dicta aliquid molestiae adipisci animi, maxime deleniti aspernatur nobis praesentium repellat odio. Explicabo accusantium tenetur, dolor consequatur aliquid voluptatem, sit vero optio quo deleniti perferendis, porro accusamus voluptas asperiores soluta fugit sunt sapiente in sequi neque dicta similique! Odio suscipit, quis eum placeat cum ipsum culpa illum soluta debitis sunt nostrum, voluptas earum id minus. Cupiditate a similique quo eveniet facere, quae minus, tempora officia porro at obcaecati animi culpa odit dignissimos consectetur? Perferendis error veniam, perspiciatis amet illum possimus eius omnis rem illo modi blanditiis reiciendis quae incidunt corrupti.
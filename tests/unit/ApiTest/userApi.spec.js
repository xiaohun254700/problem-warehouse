import UserService from "@/api/user.service.js";
import axios from "axios";

describe("用户模块", () => {
  it("获取所有用户数据", async () => {
    let users = [
      {
        name: "Tom",
      },
    ];
    let mockRes = { data: users };
    jest.mock("axios");
    axios.get.mockResolvedValue(mockRes);
    let res = await UserService.getAll();
    console.log(res);
  });
});

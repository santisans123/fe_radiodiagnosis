import React, { useState, useEffect } from "react";
import HeaderDataUser from "../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../component/Sidebar/SidebarRadiografer";
import SidebarPatient from "../../component/Sidebar/SidebarPatient";

// Data dummy untuk profilePatient pengguna
const dummyData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "1234 Elm Street, Springfield",
};

const ProfilePatient = () => {
  // Data dummy
  const dummyData = {
    profile_picture: "/path/to/dummy-image.jpg",
    fullname: "John Doe",
    email: "johndoe@example.com",
    phone_number: "123-456-7890",
    gender: "Laki-Laki",
    role: "Radiografer",
    address: "123 Main St, Anytown, USA",
    province: "Sulawesi Selatan",
    city: "Makassar",
    postal_code: "90210",
  };

  // State untuk file yang dipilih
  const [selectedFile, setSelectedFile] = useState(null);

  // Handler untuk perubahan input
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  // Handler untuk submit
  const handleSubmit = () => {
    console.log("Data has been saved.");
  };

  return (
    <div>
      <body className="g-sidenav-show bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <aside
          className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <SidebarPatient />
        </aside>
        <main className="main-content position-relative border-radius-lg">
          <HeaderDataUser />
          <div className="container-fluid py-2">
            <div className="row p-0">
              <div className="col-12">
                <div className="card mb-4">
                  <div>
                    <div className="card-body px-0 pb-2 mt-2">
                      <div className="row justify-content-center">
                        <div className="col-md-6">
                          <div className="card shadow-none border-0">
                            <div className="card-header pb-0">
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0 font-weight-bolder">
                                  Data Diri
                                </h6>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="row gx-4">
                                <div className="col-auto">
                                  <div className="avatar avatar-xl position-relative">
                                    <img
                                      src={dummyData.profile_picture}
                                      alt="profile_image"
                                      className="w-100 border-radius-lg shadow-sm"
                                    />
                                  </div>
                                </div>
                                <div className="col-auto my-auto">
                                  <div className="h-100">
                                    <input
                                      type="file"
                                      className="text-xs mb-1"
                                      name="file"
                                      onChange={(e) =>
                                        setSelectedFile(e.target.files[0])
                                      }
                                    />
                                    <p className="mb-0 text-xs">
                                      Hanya gunakan gambar dengan format
                                      .jpg/.png
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-2">
                                <div className="col">
                                  <div className="form-group">
                                    <label
                                      htmlFor="fullname"
                                      className="form-control-label"
                                    >
                                      Nama Lengkap
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Masukkan nama lengkap anda"
                                      value={dummyData.fullname}
                                      name="fullname"
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label
                                      htmlFor="email"
                                      className="form-control-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      className="form-control"
                                      type="email"
                                      placeholder="Masukkan email anda"
                                      value={dummyData.email}
                                      name="email"
                                      disabled
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label
                                      htmlFor="phone_number"
                                      className="form-control-label"
                                    >
                                      Nomor Telepon
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Masukkan nomor telepon anda"
                                      value={dummyData.phone_number}
                                      name="phone_number"
                                      disabled
                                    />
                                  </div>

                                  <div className="row">
                                    <label
                                      htmlFor="gender"
                                      className="form-control-label"
                                    >
                                      Jenis Kelamin
                                    </label>
                                  </div>

                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="gender"
                                    id="Laki-Laki"
                                    value="Laki-Laki"
                                    autoComplete="off"
                                    checked={dummyData.gender === "Laki-Laki"}
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="btn btn-outline-primary btn-sm"
                                    htmlFor="Laki-Laki"
                                  >
                                    Laki-Laki
                                  </label>

                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="gender"
                                    id="Perempuan"
                                    value="Perempuan"
                                    autoComplete="off"
                                    checked={dummyData.gender === "Perempuan"}
                                    onChange={handleChange}
                                  />
                                  <label
                                    className="btn btn-outline-secondary btn-sm"
                                    htmlFor="Perempuan"
                                  >
                                    Perempuan
                                  </label>
                                  <div className="form-group">
                                    <label
                                      htmlFor="role"
                                      className="form-control-label"
                                    >
                                      Profesi
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Masukkan profesi anda"
                                      value={dummyData.role}
                                      name="role"
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label
                                      htmlFor="address"
                                      className="form-control-label"
                                    >
                                      Alamat
                                    </label>
                                    <textarea
                                      className="form-control"
                                      type="text"
                                      placeholder="Masukkan alamat anda"
                                      value={dummyData.address}
                                      name="address"
                                      onChange={handleChange}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label
                                      htmlFor="province"
                                      className="form-control-label"
                                    >
                                      Provinsi
                                    </label>
                                    <select
                                      className="form-select"
                                      id="province"
                                      name="province"
                                      value={dummyData.province}
                                      onChange={handleChange}
                                    >
                                      <option value="">Provinsi</option>
                                      <option value="Sulawesi Selatan">
                                        Sulawesi Selatan
                                      </option>
                                      <option value="Jawa Timur">
                                        Jawa Timur
                                      </option>
                                      <option value="Jawa Tengah">
                                        Jawa Tengah
                                      </option>
                                      <option value="DKI Jakarta">
                                        DKI Jakarta
                                      </option>
                                      <option value="Jawa Barat">
                                        Jawa Barat
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label
                                      htmlFor="city"
                                      className="form-control-label"
                                    >
                                      Kota
                                    </label>
                                    <select
                                      className="form-select"
                                      id="city"
                                      name="city"
                                      value={dummyData.city}
                                      onChange={handleChange}
                                    >
                                      <option value="">Kota</option>
                                      <option value="Makassar">Makassar</option>
                                      <option value="Surabaya">Surabaya</option>
                                      <option value="Semarang">Semarang</option>
                                      <option value="Jakarta">Jakarta</option>
                                      <option value="Banten">Banten</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default ProfilePatient;

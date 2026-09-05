import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

export const getTotalDataHarian = async (req, res) => {
  try {
    const { start, end } = getDataHarian();

    const [
      dataPasien,
      dataRalan,
      dataRanap,
      dataIgd,
      dataLabRalan,
      dataLabRanap,
      dataLabPa,
      dataLabPk,
      dataLabMb,
      dataGawatDarurat,
      dataPenyakitDalam,
      dataAntrianPenyakitDalam,
      dataPeriksaPenyakitDalam,
      dataPediatriAnak,
      dataAntrianAnak,
      dataPeriksaAnak,
      dataBedah,
      dataAntrianBedah,
      dataPeriksaBedah,
      dataKandunganKebidanan,
      dataAntrianKandunganKebidanan,
      dataPeriksaKandunganKebidanan,
      dataNeurologiSaraf,
      dataAntrianNeurologiSaraf,
      dataPeriksaNeurologiSaraf,
      dataJantungPembuluhDarah,
      dataAntrianJantungPembuluhDarah,
      dataPeriksaJantungPembuluhDarah,
      dataRehabilitasiMedik,
      dataAntrianRehabilitasiMedik,
      dataPeriksaRehabilitasiMedik,
      dataKulitKelamin,
      dataAntrianKulitKelamin,
      dataPeriksaKulitKelamin,
      dataThtKl,
      dataAntrianThtKl,
      dataPeriksaThtKl,
      dataMata,
      dataAntrianMata,
      dataPeriksaMata,
      dataGeriatri,
      dataAntrianGeriatri,
      dataPeriksaGeriatri,
      dataOrthopedi,
      dataAntrianOrthopedi,
      dataPeriksaOrthopedi,
      dataUrologi,
      dataAntrianUrologi,
      dataPeriksaUrologi,
      dataGigiMulut,
      dataAntrianGigiMulut,
      dataPeriksaGigiMulut,
      dataTbDots,
      dataAntrianTbDots,
      dataPeriksaTbDots,
      dataVct,
      dataAntrianVct,
      dataPeriksaVct,
      dataUmumMcu,
      dataAntrianUmumMcu,
      dataPeriksaUmumMcu,
    ] = await Promise.all([
      prisma.$queryRaw`
      SELECT COUNT(*) AS total_pasien FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end} 
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,


      prisma.$queryRaw`
      SELECT COUNT(*) AS total_ralan FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND status_lanjut = 'Ralan'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_ranap FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND status_lanjut = 'Ranap'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_igd FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'IGDK'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,  

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_ralan FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND status = 'Ralan'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_ranap FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND status = 'Ranap'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_pa FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND kategori = 'PA'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_pk FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND kategori = 'PK'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_mb FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND kategori = 'MB'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_gawat_darurat FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0001'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_penyakit_dalam FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0002'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_penyakit_dalam FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0002'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_penyakit_dalam FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0002'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_pediatri_anak FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0003'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_anak FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0003'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_anak FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0003'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_bedah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0004'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_bedah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0004'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_bedah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0004'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_kandungan_kebidanan FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0005'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_kandungan_kebidanan FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0005'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama', 'Baru')
      `,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_kandungan_kebidanan FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0005'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama', 'Baru')
      `,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_neurologi_saraf FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0006'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_neurologi_saraf FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0006'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_neurologi_saraf FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0006'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_jantung_pembuluh_darah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0007'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_jantung_pembuluh_darah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0007'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_jantung_pembuluh_darah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0007'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_rehabilitasi_medik FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli ='U0008'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_rehabilitasi_medik FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli ='U0008'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_rehabilitasi_medik FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli ='U0008'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_kulit_kelamin FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0009'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_kulit_kelamin FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0009'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_kulit_kelamin FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0009'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_tht_kl FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0010'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_tht_kl FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0010'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_tht_kl FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0010'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_mata FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli ='U0011'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_mata FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli ='U0011'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_mata FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli ='U0011'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_geriatri FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0012'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_geriatri FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0012'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_geriatri FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0012'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_orthopedi FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND  kd_poli = 'U0013'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_orthopedi FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND  kd_poli = 'U0013'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_orthopedi FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND  kd_poli = 'U0013'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_urologi FROM reg_periksa 
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0014'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_urologi FROM reg_periksa 
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0014'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_urologi FROM reg_periksa 
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0014'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_gigi_mulut FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0015'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_gigi_mulut FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0015'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_gigi_mulut FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0015'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_tb_dots FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0016'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_tb_dots FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0016'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_tb_dots FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0016'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_vct FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0017'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_vct FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0017'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_vct FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0017'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_umum_mcu FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0020'
      AND stts != 'Batal'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_antrian_umum_mcu FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0020'
      AND stts != 'Batal'
      AND stts = 'Belum'
      AND stts_daftar IN ('Lama','Baru')`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_periksa_umum_mcu FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0020'
      AND stts != 'Batal'
      AND stts = 'Sudah'
      AND stts_daftar IN ('Lama','Baru')`,
    ]);

    const totalPasien = Number(dataPasien[0]?.total_pasien ?? 0);

    const totalRalan = Number(dataRalan[0]?.total_ralan ?? 0);
    const totalRanap = Number(dataRanap[0]?.total_ranap ?? 0);

    const totalIgd = Number(dataIgd[0]?.total_igd ?? 0);


    const totalLabRalan = Number(
      dataLabRalan[0]?.total_laboratorium_ralan ?? 0,
    );
    const totalLabRanap = Number(
      dataLabRanap[0]?.total_laboratorium_ranap ?? 0,
    );
    const totalLabPa = Number(dataLabPa[0]?.total_laboratorium_pa ?? 0);
    const totalLabPk = Number(dataLabPk[0]?.total_laboratorium_pk ?? 0);
    const totalLabMb = Number(dataLabMb[0]?.total_laboratorium_mb ?? 0);
    const totalGawatDarurat = Number(
      dataGawatDarurat[0]?.total_gawat_darurat ?? 0,
    );

    const totalPenyakitDalam = Number(
      dataPenyakitDalam[0]?.total_penyakit_dalam ?? 0,
    );
    const totalAntrianPenyakitDalam = Number(dataAntrianPenyakitDalam[0]?.total_antrian_penyakit_dalam ?? 0)
    const totalPeriksaPenyakitDalam = Number(
      dataPeriksaPenyakitDalam[0]?.total_periksa_penyakit_dalam ?? 0,
    );

    const totalPediatriAnak = Number(
      dataPediatriAnak[0]?.total_pediatri_anak ?? 0,
    );
    const totalAntrianPediatriAnak = Number(
      dataAntrianAnak[0]?.total_antrian_anak ?? 0,
    );
    const totalPeriksaPediatriAnak = Number(
      dataPeriksaAnak[0]?.total_periksa_anak ?? 0,
    );

    const totalBedah = Number(dataBedah[0]?.total_bedah ?? 0);
    const totalAntrianBedah = Number(dataAntrianBedah[0]?.total_antrian_bedah ?? 0);
    const totalPeriksaBedah = Number(dataPeriksaBedah[0]?.total_periksa_bedah ?? 0);


    const totalKandunganKebidanan = Number(
      dataKandunganKebidanan[0]?.total_kandungan_kebidanan ?? 0,
    );
    const totalAntrianKandunganKebidanan = Number(dataAntrianKandunganKebidanan[0]?.total_antrian_kandungan_kebidanan ?? 0)
    const totalPeriksaKandunganKebidanan = Number(dataPeriksaKandunganKebidanan[0]?.total_periksa_kandungan_kebidanan ?? 0)

    const totalNeurologiSaraf = Number(
      dataNeurologiSaraf[0]?.total_neurologi_saraf ?? 0,
    );
    const totalAntrianNeurologiSaraf = Number(dataAntrianNeurologiSaraf[0]?.total_antrian_neurologi_saraf ?? 0)
    const totalPeriksaNeurologiSaraf = Number(dataPeriksaNeurologiSaraf[0]?.total_periksa_neurologi_saraf ?? 0)

    const totalJantungPembuluhDarah = Number(
      dataJantungPembuluhDarah[0]?.total_jantung_pembuluh_darah ?? 0,
    );
    const totalAntrianJantungPembuluhDarah = Number(
      dataAntrianJantungPembuluhDarah[0]?.total_antrian_jantung_pembuluh_darah ?? 0,
    );
    const totalPeriksaJantungPembuluhDarah = Number(
      dataPeriksaJantungPembuluhDarah[0]?.total_periksa_jantung_pembuluh_darah ?? 0,
    );

    const totalRehabilitasiMedik = Number(
      dataRehabilitasiMedik[0]?.total_rehabilitasi_medik ?? 0,
    );
    const totalAntrianRehabilitasiMedik = Number(
      dataAntrianRehabilitasiMedik[0]?.total_antrian_rehabilitasi_medik ?? 0,
    );
    const totalPeriksaRehabilitasiMedik = Number(
      dataPeriksaRehabilitasiMedik[0]?.total_periksa_rehabilitasi_medik ?? 0,
    );


    const totalKulitKelamin = Number(
      dataKulitKelamin[0]?.total_kulit_kelamin ?? 0,
    );
    const totalAntrianKulitKelamin = Number(
      dataAntrianKulitKelamin[0]?.total_antrian_kulit_kelamin ?? 0,
    );
    const totalPeriksaKulitKelamin = Number(
      dataPeriksaKulitKelamin[0]?.total_periksa_kulit_kelamin ?? 0,
    );

    const totalThtKl = Number(dataThtKl[0]?.total_tht_kl ?? 0);
    const totalAntrianThtKl = Number(
      dataAntrianThtKl[0]?.total_antrian_tht_kl ?? 0
    );
    const totalPeriksaThtKl = Number(
      dataPeriksaThtKl[0]?.total_periksa_tht_kl ?? 0
    );

    const totalMata = Number(dataMata[0]?.total_mata ?? 0);
    const totalAntrianMata = Number(dataAntrianMata[0]?.total_antrian_mata ?? 0);
    const totalPeriksaMata = Number(dataPeriksaMata[0]?.total_periksa_mata ?? 0);

    const totalGeriatri = Number(dataGeriatri[0]?.total_geriatri ?? 0);
    const totalAntrianGeriatri = Number(dataAntrianGeriatri[0]?.total_antrian_geriatri ?? 0);
    const totalPeriksaGeriatri = Number(dataPeriksaGeriatri[0]?.total_periksa_geriatri ?? 0);

    const totalOrthopedi = Number(dataOrthopedi[0]?.total_orthopedi ?? 0);
    const totalAntrianOrthopedi = Number(dataAntrianOrthopedi[0]?.total_antrian_orthopedi ?? 0);
    const totalPeriksaOrthopedi = Number(dataPeriksaOrthopedi[0]?.total_periksa_orthopedi ?? 0);

    const totalUrologi = Number(dataUrologi[0]?.total_urologi ?? 0);
    const totalAntrianUrologi = Number(dataAntrianUrologi[0]?.total_antrian_urologi ?? 0);
    const totalPeriksaUrologi = Number(dataPeriksaUrologi[0]?.total_periksa_urologi ?? 0);

    const totalGigiMulut = Number(dataGigiMulut[0]?.total_gigi_mulut ?? 0);
    const totalAntrianGigiMulut = Number(dataAntrianGigiMulut[0]?.total_antrian_gigi_mulut ?? 0);
    const totalPeriksaGigiMulut = Number(dataPeriksaGigiMulut[0]?.total_periksa_gigi_mulut ?? 0);

    const totalTbDots = Number(dataTbDots[0]?.total_tb_dots ?? 0);
    const totalAntrianTbDots = Number(dataAntrianTbDots[0]?.total_antrian_tb_dots ?? 0);
    const totalPeriksaTbDots = Number(dataPeriksaTbDots[0]?.total_periksa_tb_dots ?? 0);

    const totalVct = Number(dataVct[0]?.total_vct ?? 0);
    const totalAntrianVct = Number(dataAntrianVct[0]?.total_antrian_vct ?? 0);
    const totalPeriksaVct = Number(dataPeriksaVct[0]?.total_periksa_vct ?? 0);

    const totalUmumMcu = Number(dataUmumMcu[0]?.total_umum_mcu ?? 0);
    const totalAntrianUmumMcu = Number(dataAntrianUmumMcu[0]?.total_antrian_umum_mcu ?? 0);
    const totalPeriksaUmumMcu = Number(dataPeriksaUmumMcu[0]?.total_periksa_umum_mcu ?? 0);

    const dataAntrianPasien = {
      antrian_penyakit_dalam: totalAntrianPenyakitDalam,
      antrian_anak : totalAntrianPediatriAnak,
      antrian_bedah : totalAntrianBedah,
      antrian_kandungan_kebidanan : totalAntrianKandunganKebidanan,
      antrian_neurologi_saraf : totalAntrianNeurologiSaraf,
      antrian_jantung_pembuluh_darah : totalAntrianJantungPembuluhDarah,
      antrian_rehabilitasi_medik : totalAntrianRehabilitasiMedik,
      antrian_kulit_kelamin : totalAntrianKulitKelamin,
      antrian_tht_kl: totalAntrianThtKl,
      antrian_mata: totalAntrianMata,
      antrian_geriatri: totalAntrianGeriatri,
      antrian_orthopedi: totalAntrianOrthopedi,
      antrian_urologi: totalAntrianUrologi,
      antrian_gigi_mulut: totalAntrianGigiMulut,
      antrian_tb_dots: totalAntrianTbDots,
      antrian_vct: totalAntrianVct,
      antrian_umum_mcu: totalAntrianUmumMcu,
    }

    const alertMessage = []

    for (const [key, value] of Object.entries(dataAntrianPasien)) {
      if (value > 5) {
        alertMessage.push(`${key} : ${value} pasien sedang menunggu`)
      } 
    }

    return res.status(200).json({
      success: true,
      data: { 
        ringkasan: {
        total_pasien: totalPasien,
        total_ralan: totalRalan,
        total_ranap: totalRanap,
        total_igd: totalIgd,
        total_gawat_darurat: totalGawatDarurat,
      },
      alertAntrianPasien: {
        alertMessage,
      },        
      laboratorium: {
        total_laboratorium_ralan: totalLabRalan,
        total_laboratorium_ranap: totalLabRanap,
        total_laboratorium_pa: totalLabPa,
        total_laboratorium_pk: totalLabPk,
        total_laboratorium_mb: totalLabMb,
      },
      Poli_Penyakit_Dalam: {
        total_penyakit_dalam: totalPenyakitDalam,
        total_antrian_penyakit_dalam: totalAntrianPenyakitDalam,
        total_periksa_penyakit_dalam: totalPeriksaPenyakitDalam,
      },
      Poli_Anak: {
        total_pediatri_anak: totalPediatriAnak,
        total_antrian_anak: totalAntrianPediatriAnak,
        total_periksa_anak: totalPeriksaPediatriAnak,
      },
      Poli_Bedah: {
        total_bedah: totalBedah,
        total_antrian_bedah: totalAntrianBedah,
        total_periksa_bedah: totalPeriksaBedah,
      },
      Poli_Kandungan_Kebidanan: {
        total_kandungan_kebidanan: totalKandunganKebidanan,
        total_antrian_kandungan_kebidanan: totalAntrianKandunganKebidanan,
        total_periksa_kandungan_kebidanan: totalPeriksaKandunganKebidanan,
      },
      Poli_Neurologi_Saraf: {
        total_neurologi_saraf: totalNeurologiSaraf,
        total_antrian_neurologi_saraf: totalAntrianNeurologiSaraf,
        total_periksa_neurologi_saraf: totalPeriksaNeurologiSaraf, 
      },
      Poli_Jantung_Pembuluh_Darah: {
        total_jantung_pembuluh_darah: totalJantungPembuluhDarah,
        total_antrian_jantung_pembuluh_darah: totalAntrianJantungPembuluhDarah,
        total_periksa_jantung_pembuluh_darah: totalPeriksaJantungPembuluhDarah,
      },
      Poli_Rehabilitas_Medik: {
        total_rehabilitasi_medik: totalRehabilitasiMedik,
        total_antrian_rehabilitasi_medik: totalAntrianRehabilitasiMedik,
        total_periksa_rehabilitasi_medik: totalPeriksaRehabilitasiMedik,
      },
      Poli_Kulit_Kelamin: {
        total_kulit_kelamin: totalKulitKelamin,
        total_antrian_kulit_kelamin: totalAntrianKulitKelamin,
        total_periksa_kulit_kelamin: totalPeriksaKulitKelamin,
      },
      Poli_Tht_Kl: {
        total_tht_kl: totalThtKl,
        total_antrian_tht_kl: totalAntrianThtKl,
        total_periksa_tht_kl: totalPeriksaThtKl,
      },
      Poli_Mata: {
        total_mata: totalMata,
        total_antrian_mata: totalAntrianMata,
        total_periksa_mata: totalPeriksaMata,
      },
      Poli_Geriatri: {
        total_geriatri: totalGeriatri,
        total_antrian_geriatri: totalAntrianGeriatri,
        total_periksa_geriatri: totalPeriksaGeriatri,
      },
      Poli_Orthopedi: {
        total_orthopedi: totalOrthopedi,
        total_antrian_orthopedi: totalAntrianOrthopedi,
        total_periksa_orthopedi: totalPeriksaOrthopedi,
      },
      Poli_Urologi: {
        total_urologi: totalUrologi,
        total_antrian_urologi: totalAntrianUrologi,
        total_periksa_urologi: totalPeriksaUrologi,
      },
      Poli_Gigi_Mulut: {
        total_gigi_mulut: totalGigiMulut,
        total_antrian_gigi_mulut: totalAntrianGigiMulut,
        total_periksa_gigi_mulut: totalPeriksaGigiMulut,
      },
      Poli_Tb_Dots: {
        total_tb_dots: totalTbDots,
        total_antrian_tb_dots: totalAntrianTbDots,
        total_periksa_tb_dots: totalPeriksaTbDots,
      },
      Poli_VCT: {
        total_vct: totalVct,
        total_antrian_vct: totalAntrianVct,
        total_periksa_vct: totalPeriksaVct,
      },
        Poli_Umum_Mcu: {
        total_umum_mcu: totalUmumMcu,
        total_antrian_umum_mcu: totalAntrianUmumMcu,
        total_periksa_umum_mcu: totalPeriksaUmumMcu,
        }, 
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: `Gagal mengambil total seluruh data harian`,
    });
  }
};

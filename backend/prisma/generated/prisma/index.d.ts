
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DataTriaseIgd
 * 
 */
export type DataTriaseIgd = $Result.DefaultSelection<Prisma.$DataTriaseIgdPayload>
/**
 * Model DetailNotaJalan
 * 
 */
export type DetailNotaJalan = $Result.DefaultSelection<Prisma.$DetailNotaJalanPayload>
/**
 * Model Kamar
 * 
 */
export type Kamar = $Result.DefaultSelection<Prisma.$KamarPayload>
/**
 * Model PeriksaLab
 * 
 */
export type PeriksaLab = $Result.DefaultSelection<Prisma.$PeriksaLabPayload>
/**
 * Model Petugas
 * 
 */
export type Petugas = $Result.DefaultSelection<Prisma.$PetugasPayload>
/**
 * Model RegPeriksa
 * 
 */
export type RegPeriksa = $Result.DefaultSelection<Prisma.$RegPeriksaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CaraMasuk: {
  Jalan: 'Jalan',
  Brankar: 'Brankar',
  Kursi_Roda: 'Kursi_Roda',
  Digendong: 'Digendong'
};

export type CaraMasuk = (typeof CaraMasuk)[keyof typeof CaraMasuk]


export const AlatTransportasi: {
  DASH: 'DASH',
  AGD: 'AGD',
  Sendiri: 'Sendiri',
  Swasta: 'Swasta'
};

export type AlatTransportasi = (typeof AlatTransportasi)[keyof typeof AlatTransportasi]


export const AlasanKedatangan: {
  Datang_Sendiri: 'Datang_Sendiri',
  Polisi: 'Polisi',
  Rujukan: 'Rujukan',
  Bidan: 'Bidan',
  Puskesmas: 'Puskesmas',
  Rumah_Sakit: 'Rumah_Sakit',
  Poliklinik: 'Poliklinik',
  Faskes_Lain: 'Faskes_Lain',
  DASH: 'DASH'
};

export type AlasanKedatangan = (typeof AlasanKedatangan)[keyof typeof AlasanKedatangan]


export const StatusKamar: {
  ISI: 'ISI',
  KOSONG: 'KOSONG',
  DIBERSIHKAN: 'DIBERSIHKAN',
  DIBOOKING: 'DIBOOKING',
  PERBAIKAN: 'PERBAIKAN'
};

export type StatusKamar = (typeof StatusKamar)[keyof typeof StatusKamar]


export const KelasKamar: {
  KELAS_1: 'KELAS_1',
  KELAS_2: 'KELAS_2',
  KELAS_3: 'KELAS_3',
  KELAS_UTAMA: 'KELAS_UTAMA',
  KELAS_VIP: 'KELAS_VIP',
  KELAS_VVIP: 'KELAS_VVIP'
};

export type KelasKamar = (typeof KelasKamar)[keyof typeof KelasKamar]


export const StatusData: {
  NON_AKTIF: 'NON_AKTIF',
  AKTIF: 'AKTIF'
};

export type StatusData = (typeof StatusData)[keyof typeof StatusData]


export const StatusPeriksaLab: {
  Ralan: 'Ralan',
  Ranap: 'Ranap'
};

export type StatusPeriksaLab = (typeof StatusPeriksaLab)[keyof typeof StatusPeriksaLab]


export const KategoriPeriksaLab: {
  PA: 'PA',
  PK: 'PK',
  MB: 'MB'
};

export type KategoriPeriksaLab = (typeof KategoriPeriksaLab)[keyof typeof KategoriPeriksaLab]


export const JenisKelamin: {
  L: 'L',
  P: 'P'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]


export const GolDarah: {
  A: 'A',
  B: 'B',
  O: 'O',
  AB: 'AB',
  MINUS: 'MINUS'
};

export type GolDarah = (typeof GolDarah)[keyof typeof GolDarah]


export const StatusNikah: {
  BELUM_MENIKAH: 'BELUM_MENIKAH',
  MENIKAH: 'MENIKAH',
  JANDA: 'JANDA',
  DUDHA: 'DUDHA',
  JOMBLO: 'JOMBLO'
};

export type StatusNikah = (typeof StatusNikah)[keyof typeof StatusNikah]


export const StatusPetugas: {
  AKTIF: 'AKTIF',
  NONAKTIF: 'NONAKTIF'
};

export type StatusPetugas = (typeof StatusPetugas)[keyof typeof StatusPetugas]


export const StatusRegPeriksa: {
  Belum: 'Belum',
  Sudah: 'Sudah',
  Batal: 'Batal',
  Berkas_Diterima: 'Berkas_Diterima',
  Dirujuk: 'Dirujuk',
  Meninggal: 'Meninggal',
  Dirawat: 'Dirawat',
  Pulang_Paksa: 'Pulang_Paksa'
};

export type StatusRegPeriksa = (typeof StatusRegPeriksa)[keyof typeof StatusRegPeriksa]


export const StatusDaftar: {
  DASH: 'DASH',
  Lama: 'Lama',
  Baru: 'Baru'
};

export type StatusDaftar = (typeof StatusDaftar)[keyof typeof StatusDaftar]


export const StatusLanjut: {
  Ralan: 'Ralan',
  Ranap: 'Ranap'
};

export type StatusLanjut = (typeof StatusLanjut)[keyof typeof StatusLanjut]


export const StatusUmur: {
  Th: 'Th',
  Bl: 'Bl',
  Hr: 'Hr'
};

export type StatusUmur = (typeof StatusUmur)[keyof typeof StatusUmur]


export const StatusBayar: {
  Sudah_Bayar: 'Sudah_Bayar',
  Belum_Bayar: 'Belum_Bayar'
};

export type StatusBayar = (typeof StatusBayar)[keyof typeof StatusBayar]


export const StatusPoli: {
  Lama: 'Lama',
  Baru: 'Baru'
};

export type StatusPoli = (typeof StatusPoli)[keyof typeof StatusPoli]

}

export type CaraMasuk = $Enums.CaraMasuk

export const CaraMasuk: typeof $Enums.CaraMasuk

export type AlatTransportasi = $Enums.AlatTransportasi

export const AlatTransportasi: typeof $Enums.AlatTransportasi

export type AlasanKedatangan = $Enums.AlasanKedatangan

export const AlasanKedatangan: typeof $Enums.AlasanKedatangan

export type StatusKamar = $Enums.StatusKamar

export const StatusKamar: typeof $Enums.StatusKamar

export type KelasKamar = $Enums.KelasKamar

export const KelasKamar: typeof $Enums.KelasKamar

export type StatusData = $Enums.StatusData

export const StatusData: typeof $Enums.StatusData

export type StatusPeriksaLab = $Enums.StatusPeriksaLab

export const StatusPeriksaLab: typeof $Enums.StatusPeriksaLab

export type KategoriPeriksaLab = $Enums.KategoriPeriksaLab

export const KategoriPeriksaLab: typeof $Enums.KategoriPeriksaLab

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

export type GolDarah = $Enums.GolDarah

export const GolDarah: typeof $Enums.GolDarah

export type StatusNikah = $Enums.StatusNikah

export const StatusNikah: typeof $Enums.StatusNikah

export type StatusPetugas = $Enums.StatusPetugas

export const StatusPetugas: typeof $Enums.StatusPetugas

export type StatusRegPeriksa = $Enums.StatusRegPeriksa

export const StatusRegPeriksa: typeof $Enums.StatusRegPeriksa

export type StatusDaftar = $Enums.StatusDaftar

export const StatusDaftar: typeof $Enums.StatusDaftar

export type StatusLanjut = $Enums.StatusLanjut

export const StatusLanjut: typeof $Enums.StatusLanjut

export type StatusUmur = $Enums.StatusUmur

export const StatusUmur: typeof $Enums.StatusUmur

export type StatusBayar = $Enums.StatusBayar

export const StatusBayar: typeof $Enums.StatusBayar

export type StatusPoli = $Enums.StatusPoli

export const StatusPoli: typeof $Enums.StatusPoli

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more DataTriaseIgds
 * const dataTriaseIgds = await prisma.dataTriaseIgd.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more DataTriaseIgds
   * const dataTriaseIgds = await prisma.dataTriaseIgd.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dataTriaseIgd`: Exposes CRUD operations for the **DataTriaseIgd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataTriaseIgds
    * const dataTriaseIgds = await prisma.dataTriaseIgd.findMany()
    * ```
    */
  get dataTriaseIgd(): Prisma.DataTriaseIgdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailNotaJalan`: Exposes CRUD operations for the **DetailNotaJalan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailNotaJalans
    * const detailNotaJalans = await prisma.detailNotaJalan.findMany()
    * ```
    */
  get detailNotaJalan(): Prisma.DetailNotaJalanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kamar`: Exposes CRUD operations for the **Kamar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kamars
    * const kamars = await prisma.kamar.findMany()
    * ```
    */
  get kamar(): Prisma.KamarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periksaLab`: Exposes CRUD operations for the **PeriksaLab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeriksaLabs
    * const periksaLabs = await prisma.periksaLab.findMany()
    * ```
    */
  get periksaLab(): Prisma.PeriksaLabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petugas`: Exposes CRUD operations for the **Petugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Petugases
    * const petugases = await prisma.petugas.findMany()
    * ```
    */
  get petugas(): Prisma.PetugasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regPeriksa`: Exposes CRUD operations for the **RegPeriksa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegPeriksas
    * const regPeriksas = await prisma.regPeriksa.findMany()
    * ```
    */
  get regPeriksa(): Prisma.RegPeriksaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DataTriaseIgd: 'DataTriaseIgd',
    DetailNotaJalan: 'DetailNotaJalan',
    Kamar: 'Kamar',
    PeriksaLab: 'PeriksaLab',
    Petugas: 'Petugas',
    RegPeriksa: 'RegPeriksa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dataTriaseIgd" | "detailNotaJalan" | "kamar" | "periksaLab" | "petugas" | "regPeriksa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DataTriaseIgd: {
        payload: Prisma.$DataTriaseIgdPayload<ExtArgs>
        fields: Prisma.DataTriaseIgdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataTriaseIgdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataTriaseIgdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>
          }
          findFirst: {
            args: Prisma.DataTriaseIgdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataTriaseIgdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>
          }
          findMany: {
            args: Prisma.DataTriaseIgdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>[]
          }
          create: {
            args: Prisma.DataTriaseIgdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>
          }
          createMany: {
            args: Prisma.DataTriaseIgdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataTriaseIgdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>
          }
          update: {
            args: Prisma.DataTriaseIgdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>
          }
          deleteMany: {
            args: Prisma.DataTriaseIgdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataTriaseIgdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataTriaseIgdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataTriaseIgdPayload>
          }
          aggregate: {
            args: Prisma.DataTriaseIgdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataTriaseIgd>
          }
          groupBy: {
            args: Prisma.DataTriaseIgdGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataTriaseIgdGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataTriaseIgdCountArgs<ExtArgs>
            result: $Utils.Optional<DataTriaseIgdCountAggregateOutputType> | number
          }
        }
      }
      DetailNotaJalan: {
        payload: Prisma.$DetailNotaJalanPayload<ExtArgs>
        fields: Prisma.DetailNotaJalanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailNotaJalanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailNotaJalanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>
          }
          findFirst: {
            args: Prisma.DetailNotaJalanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailNotaJalanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>
          }
          findMany: {
            args: Prisma.DetailNotaJalanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>[]
          }
          create: {
            args: Prisma.DetailNotaJalanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>
          }
          createMany: {
            args: Prisma.DetailNotaJalanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetailNotaJalanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>
          }
          update: {
            args: Prisma.DetailNotaJalanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>
          }
          deleteMany: {
            args: Prisma.DetailNotaJalanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailNotaJalanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetailNotaJalanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailNotaJalanPayload>
          }
          aggregate: {
            args: Prisma.DetailNotaJalanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailNotaJalan>
          }
          groupBy: {
            args: Prisma.DetailNotaJalanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailNotaJalanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailNotaJalanCountArgs<ExtArgs>
            result: $Utils.Optional<DetailNotaJalanCountAggregateOutputType> | number
          }
        }
      }
      Kamar: {
        payload: Prisma.$KamarPayload<ExtArgs>
        fields: Prisma.KamarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KamarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KamarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          findFirst: {
            args: Prisma.KamarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KamarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          findMany: {
            args: Prisma.KamarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>[]
          }
          create: {
            args: Prisma.KamarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          createMany: {
            args: Prisma.KamarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KamarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          update: {
            args: Prisma.KamarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          deleteMany: {
            args: Prisma.KamarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KamarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KamarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KamarPayload>
          }
          aggregate: {
            args: Prisma.KamarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKamar>
          }
          groupBy: {
            args: Prisma.KamarGroupByArgs<ExtArgs>
            result: $Utils.Optional<KamarGroupByOutputType>[]
          }
          count: {
            args: Prisma.KamarCountArgs<ExtArgs>
            result: $Utils.Optional<KamarCountAggregateOutputType> | number
          }
        }
      }
      PeriksaLab: {
        payload: Prisma.$PeriksaLabPayload<ExtArgs>
        fields: Prisma.PeriksaLabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriksaLabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriksaLabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>
          }
          findFirst: {
            args: Prisma.PeriksaLabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriksaLabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>
          }
          findMany: {
            args: Prisma.PeriksaLabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>[]
          }
          create: {
            args: Prisma.PeriksaLabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>
          }
          createMany: {
            args: Prisma.PeriksaLabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PeriksaLabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>
          }
          update: {
            args: Prisma.PeriksaLabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>
          }
          deleteMany: {
            args: Prisma.PeriksaLabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriksaLabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeriksaLabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriksaLabPayload>
          }
          aggregate: {
            args: Prisma.PeriksaLabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriksaLab>
          }
          groupBy: {
            args: Prisma.PeriksaLabGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriksaLabGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriksaLabCountArgs<ExtArgs>
            result: $Utils.Optional<PeriksaLabCountAggregateOutputType> | number
          }
        }
      }
      Petugas: {
        payload: Prisma.$PetugasPayload<ExtArgs>
        fields: Prisma.PetugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>
          }
          findFirst: {
            args: Prisma.PetugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>
          }
          findMany: {
            args: Prisma.PetugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>[]
          }
          create: {
            args: Prisma.PetugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>
          }
          createMany: {
            args: Prisma.PetugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PetugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>
          }
          update: {
            args: Prisma.PetugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>
          }
          deleteMany: {
            args: Prisma.PetugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetugasPayload>
          }
          aggregate: {
            args: Prisma.PetugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetugas>
          }
          groupBy: {
            args: Prisma.PetugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetugasCountArgs<ExtArgs>
            result: $Utils.Optional<PetugasCountAggregateOutputType> | number
          }
        }
      }
      RegPeriksa: {
        payload: Prisma.$RegPeriksaPayload<ExtArgs>
        fields: Prisma.RegPeriksaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegPeriksaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegPeriksaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>
          }
          findFirst: {
            args: Prisma.RegPeriksaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegPeriksaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>
          }
          findMany: {
            args: Prisma.RegPeriksaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>[]
          }
          create: {
            args: Prisma.RegPeriksaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>
          }
          createMany: {
            args: Prisma.RegPeriksaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegPeriksaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>
          }
          update: {
            args: Prisma.RegPeriksaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>
          }
          deleteMany: {
            args: Prisma.RegPeriksaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegPeriksaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegPeriksaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegPeriksaPayload>
          }
          aggregate: {
            args: Prisma.RegPeriksaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegPeriksa>
          }
          groupBy: {
            args: Prisma.RegPeriksaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegPeriksaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegPeriksaCountArgs<ExtArgs>
            result: $Utils.Optional<RegPeriksaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    dataTriaseIgd?: DataTriaseIgdOmit
    detailNotaJalan?: DetailNotaJalanOmit
    kamar?: KamarOmit
    periksaLab?: PeriksaLabOmit
    petugas?: PetugasOmit
    regPeriksa?: RegPeriksaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RegPeriksaCountOutputType
   */

  export type RegPeriksaCountOutputType = {
    detailNotaJalan: number
  }

  export type RegPeriksaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailNotaJalan?: boolean | RegPeriksaCountOutputTypeCountDetailNotaJalanArgs
  }

  // Custom InputTypes
  /**
   * RegPeriksaCountOutputType without action
   */
  export type RegPeriksaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksaCountOutputType
     */
    select?: RegPeriksaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegPeriksaCountOutputType without action
   */
  export type RegPeriksaCountOutputTypeCountDetailNotaJalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailNotaJalanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DataTriaseIgd
   */

  export type AggregateDataTriaseIgd = {
    _count: DataTriaseIgdCountAggregateOutputType | null
    _min: DataTriaseIgdMinAggregateOutputType | null
    _max: DataTriaseIgdMaxAggregateOutputType | null
  }

  export type DataTriaseIgdMinAggregateOutputType = {
    no_rawat: string | null
    tgl_kunjungan: Date | null
    cara_masuk: $Enums.CaraMasuk | null
    alat_transportasi: $Enums.AlatTransportasi | null
    alasan_kedatangan: $Enums.AlasanKedatangan | null
    keterangan_kedatangan: string | null
    kode_kasus: string | null
    tekanan_darah: string | null
    nadi: string | null
    pernapasan: string | null
    suhu: string | null
    saturasi_o2: string | null
    nyeri: string | null
  }

  export type DataTriaseIgdMaxAggregateOutputType = {
    no_rawat: string | null
    tgl_kunjungan: Date | null
    cara_masuk: $Enums.CaraMasuk | null
    alat_transportasi: $Enums.AlatTransportasi | null
    alasan_kedatangan: $Enums.AlasanKedatangan | null
    keterangan_kedatangan: string | null
    kode_kasus: string | null
    tekanan_darah: string | null
    nadi: string | null
    pernapasan: string | null
    suhu: string | null
    saturasi_o2: string | null
    nyeri: string | null
  }

  export type DataTriaseIgdCountAggregateOutputType = {
    no_rawat: number
    tgl_kunjungan: number
    cara_masuk: number
    alat_transportasi: number
    alasan_kedatangan: number
    keterangan_kedatangan: number
    kode_kasus: number
    tekanan_darah: number
    nadi: number
    pernapasan: number
    suhu: number
    saturasi_o2: number
    nyeri: number
    _all: number
  }


  export type DataTriaseIgdMinAggregateInputType = {
    no_rawat?: true
    tgl_kunjungan?: true
    cara_masuk?: true
    alat_transportasi?: true
    alasan_kedatangan?: true
    keterangan_kedatangan?: true
    kode_kasus?: true
    tekanan_darah?: true
    nadi?: true
    pernapasan?: true
    suhu?: true
    saturasi_o2?: true
    nyeri?: true
  }

  export type DataTriaseIgdMaxAggregateInputType = {
    no_rawat?: true
    tgl_kunjungan?: true
    cara_masuk?: true
    alat_transportasi?: true
    alasan_kedatangan?: true
    keterangan_kedatangan?: true
    kode_kasus?: true
    tekanan_darah?: true
    nadi?: true
    pernapasan?: true
    suhu?: true
    saturasi_o2?: true
    nyeri?: true
  }

  export type DataTriaseIgdCountAggregateInputType = {
    no_rawat?: true
    tgl_kunjungan?: true
    cara_masuk?: true
    alat_transportasi?: true
    alasan_kedatangan?: true
    keterangan_kedatangan?: true
    kode_kasus?: true
    tekanan_darah?: true
    nadi?: true
    pernapasan?: true
    suhu?: true
    saturasi_o2?: true
    nyeri?: true
    _all?: true
  }

  export type DataTriaseIgdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataTriaseIgd to aggregate.
     */
    where?: DataTriaseIgdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataTriaseIgds to fetch.
     */
    orderBy?: DataTriaseIgdOrderByWithRelationInput | DataTriaseIgdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataTriaseIgdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataTriaseIgds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataTriaseIgds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataTriaseIgds
    **/
    _count?: true | DataTriaseIgdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataTriaseIgdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataTriaseIgdMaxAggregateInputType
  }

  export type GetDataTriaseIgdAggregateType<T extends DataTriaseIgdAggregateArgs> = {
        [P in keyof T & keyof AggregateDataTriaseIgd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataTriaseIgd[P]>
      : GetScalarType<T[P], AggregateDataTriaseIgd[P]>
  }




  export type DataTriaseIgdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataTriaseIgdWhereInput
    orderBy?: DataTriaseIgdOrderByWithAggregationInput | DataTriaseIgdOrderByWithAggregationInput[]
    by: DataTriaseIgdScalarFieldEnum[] | DataTriaseIgdScalarFieldEnum
    having?: DataTriaseIgdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataTriaseIgdCountAggregateInputType | true
    _min?: DataTriaseIgdMinAggregateInputType
    _max?: DataTriaseIgdMaxAggregateInputType
  }

  export type DataTriaseIgdGroupByOutputType = {
    no_rawat: string
    tgl_kunjungan: Date
    cara_masuk: $Enums.CaraMasuk
    alat_transportasi: $Enums.AlatTransportasi
    alasan_kedatangan: $Enums.AlasanKedatangan
    keterangan_kedatangan: string
    kode_kasus: string
    tekanan_darah: string
    nadi: string
    pernapasan: string
    suhu: string
    saturasi_o2: string
    nyeri: string
    _count: DataTriaseIgdCountAggregateOutputType | null
    _min: DataTriaseIgdMinAggregateOutputType | null
    _max: DataTriaseIgdMaxAggregateOutputType | null
  }

  type GetDataTriaseIgdGroupByPayload<T extends DataTriaseIgdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataTriaseIgdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataTriaseIgdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataTriaseIgdGroupByOutputType[P]>
            : GetScalarType<T[P], DataTriaseIgdGroupByOutputType[P]>
        }
      >
    >


  export type DataTriaseIgdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_rawat?: boolean
    tgl_kunjungan?: boolean
    cara_masuk?: boolean
    alat_transportasi?: boolean
    alasan_kedatangan?: boolean
    keterangan_kedatangan?: boolean
    kode_kasus?: boolean
    tekanan_darah?: boolean
    nadi?: boolean
    pernapasan?: boolean
    suhu?: boolean
    saturasi_o2?: boolean
    nyeri?: boolean
  }, ExtArgs["result"]["dataTriaseIgd"]>



  export type DataTriaseIgdSelectScalar = {
    no_rawat?: boolean
    tgl_kunjungan?: boolean
    cara_masuk?: boolean
    alat_transportasi?: boolean
    alasan_kedatangan?: boolean
    keterangan_kedatangan?: boolean
    kode_kasus?: boolean
    tekanan_darah?: boolean
    nadi?: boolean
    pernapasan?: boolean
    suhu?: boolean
    saturasi_o2?: boolean
    nyeri?: boolean
  }

  export type DataTriaseIgdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_rawat" | "tgl_kunjungan" | "cara_masuk" | "alat_transportasi" | "alasan_kedatangan" | "keterangan_kedatangan" | "kode_kasus" | "tekanan_darah" | "nadi" | "pernapasan" | "suhu" | "saturasi_o2" | "nyeri", ExtArgs["result"]["dataTriaseIgd"]>

  export type $DataTriaseIgdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataTriaseIgd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      no_rawat: string
      tgl_kunjungan: Date
      cara_masuk: $Enums.CaraMasuk
      alat_transportasi: $Enums.AlatTransportasi
      alasan_kedatangan: $Enums.AlasanKedatangan
      keterangan_kedatangan: string
      kode_kasus: string
      tekanan_darah: string
      nadi: string
      pernapasan: string
      suhu: string
      saturasi_o2: string
      nyeri: string
    }, ExtArgs["result"]["dataTriaseIgd"]>
    composites: {}
  }

  type DataTriaseIgdGetPayload<S extends boolean | null | undefined | DataTriaseIgdDefaultArgs> = $Result.GetResult<Prisma.$DataTriaseIgdPayload, S>

  type DataTriaseIgdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataTriaseIgdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataTriaseIgdCountAggregateInputType | true
    }

  export interface DataTriaseIgdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataTriaseIgd'], meta: { name: 'DataTriaseIgd' } }
    /**
     * Find zero or one DataTriaseIgd that matches the filter.
     * @param {DataTriaseIgdFindUniqueArgs} args - Arguments to find a DataTriaseIgd
     * @example
     * // Get one DataTriaseIgd
     * const dataTriaseIgd = await prisma.dataTriaseIgd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataTriaseIgdFindUniqueArgs>(args: SelectSubset<T, DataTriaseIgdFindUniqueArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataTriaseIgd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataTriaseIgdFindUniqueOrThrowArgs} args - Arguments to find a DataTriaseIgd
     * @example
     * // Get one DataTriaseIgd
     * const dataTriaseIgd = await prisma.dataTriaseIgd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataTriaseIgdFindUniqueOrThrowArgs>(args: SelectSubset<T, DataTriaseIgdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataTriaseIgd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdFindFirstArgs} args - Arguments to find a DataTriaseIgd
     * @example
     * // Get one DataTriaseIgd
     * const dataTriaseIgd = await prisma.dataTriaseIgd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataTriaseIgdFindFirstArgs>(args?: SelectSubset<T, DataTriaseIgdFindFirstArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataTriaseIgd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdFindFirstOrThrowArgs} args - Arguments to find a DataTriaseIgd
     * @example
     * // Get one DataTriaseIgd
     * const dataTriaseIgd = await prisma.dataTriaseIgd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataTriaseIgdFindFirstOrThrowArgs>(args?: SelectSubset<T, DataTriaseIgdFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataTriaseIgds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataTriaseIgds
     * const dataTriaseIgds = await prisma.dataTriaseIgd.findMany()
     * 
     * // Get first 10 DataTriaseIgds
     * const dataTriaseIgds = await prisma.dataTriaseIgd.findMany({ take: 10 })
     * 
     * // Only select the `no_rawat`
     * const dataTriaseIgdWithNo_rawatOnly = await prisma.dataTriaseIgd.findMany({ select: { no_rawat: true } })
     * 
     */
    findMany<T extends DataTriaseIgdFindManyArgs>(args?: SelectSubset<T, DataTriaseIgdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataTriaseIgd.
     * @param {DataTriaseIgdCreateArgs} args - Arguments to create a DataTriaseIgd.
     * @example
     * // Create one DataTriaseIgd
     * const DataTriaseIgd = await prisma.dataTriaseIgd.create({
     *   data: {
     *     // ... data to create a DataTriaseIgd
     *   }
     * })
     * 
     */
    create<T extends DataTriaseIgdCreateArgs>(args: SelectSubset<T, DataTriaseIgdCreateArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataTriaseIgds.
     * @param {DataTriaseIgdCreateManyArgs} args - Arguments to create many DataTriaseIgds.
     * @example
     * // Create many DataTriaseIgds
     * const dataTriaseIgd = await prisma.dataTriaseIgd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataTriaseIgdCreateManyArgs>(args?: SelectSubset<T, DataTriaseIgdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataTriaseIgd.
     * @param {DataTriaseIgdDeleteArgs} args - Arguments to delete one DataTriaseIgd.
     * @example
     * // Delete one DataTriaseIgd
     * const DataTriaseIgd = await prisma.dataTriaseIgd.delete({
     *   where: {
     *     // ... filter to delete one DataTriaseIgd
     *   }
     * })
     * 
     */
    delete<T extends DataTriaseIgdDeleteArgs>(args: SelectSubset<T, DataTriaseIgdDeleteArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataTriaseIgd.
     * @param {DataTriaseIgdUpdateArgs} args - Arguments to update one DataTriaseIgd.
     * @example
     * // Update one DataTriaseIgd
     * const dataTriaseIgd = await prisma.dataTriaseIgd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataTriaseIgdUpdateArgs>(args: SelectSubset<T, DataTriaseIgdUpdateArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataTriaseIgds.
     * @param {DataTriaseIgdDeleteManyArgs} args - Arguments to filter DataTriaseIgds to delete.
     * @example
     * // Delete a few DataTriaseIgds
     * const { count } = await prisma.dataTriaseIgd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataTriaseIgdDeleteManyArgs>(args?: SelectSubset<T, DataTriaseIgdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataTriaseIgds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataTriaseIgds
     * const dataTriaseIgd = await prisma.dataTriaseIgd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataTriaseIgdUpdateManyArgs>(args: SelectSubset<T, DataTriaseIgdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataTriaseIgd.
     * @param {DataTriaseIgdUpsertArgs} args - Arguments to update or create a DataTriaseIgd.
     * @example
     * // Update or create a DataTriaseIgd
     * const dataTriaseIgd = await prisma.dataTriaseIgd.upsert({
     *   create: {
     *     // ... data to create a DataTriaseIgd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataTriaseIgd we want to update
     *   }
     * })
     */
    upsert<T extends DataTriaseIgdUpsertArgs>(args: SelectSubset<T, DataTriaseIgdUpsertArgs<ExtArgs>>): Prisma__DataTriaseIgdClient<$Result.GetResult<Prisma.$DataTriaseIgdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataTriaseIgds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdCountArgs} args - Arguments to filter DataTriaseIgds to count.
     * @example
     * // Count the number of DataTriaseIgds
     * const count = await prisma.dataTriaseIgd.count({
     *   where: {
     *     // ... the filter for the DataTriaseIgds we want to count
     *   }
     * })
    **/
    count<T extends DataTriaseIgdCountArgs>(
      args?: Subset<T, DataTriaseIgdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataTriaseIgdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataTriaseIgd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataTriaseIgdAggregateArgs>(args: Subset<T, DataTriaseIgdAggregateArgs>): Prisma.PrismaPromise<GetDataTriaseIgdAggregateType<T>>

    /**
     * Group by DataTriaseIgd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataTriaseIgdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataTriaseIgdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataTriaseIgdGroupByArgs['orderBy'] }
        : { orderBy?: DataTriaseIgdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataTriaseIgdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataTriaseIgdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataTriaseIgd model
   */
  readonly fields: DataTriaseIgdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataTriaseIgd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataTriaseIgdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataTriaseIgd model
   */
  interface DataTriaseIgdFieldRefs {
    readonly no_rawat: FieldRef<"DataTriaseIgd", 'String'>
    readonly tgl_kunjungan: FieldRef<"DataTriaseIgd", 'DateTime'>
    readonly cara_masuk: FieldRef<"DataTriaseIgd", 'CaraMasuk'>
    readonly alat_transportasi: FieldRef<"DataTriaseIgd", 'AlatTransportasi'>
    readonly alasan_kedatangan: FieldRef<"DataTriaseIgd", 'AlasanKedatangan'>
    readonly keterangan_kedatangan: FieldRef<"DataTriaseIgd", 'String'>
    readonly kode_kasus: FieldRef<"DataTriaseIgd", 'String'>
    readonly tekanan_darah: FieldRef<"DataTriaseIgd", 'String'>
    readonly nadi: FieldRef<"DataTriaseIgd", 'String'>
    readonly pernapasan: FieldRef<"DataTriaseIgd", 'String'>
    readonly suhu: FieldRef<"DataTriaseIgd", 'String'>
    readonly saturasi_o2: FieldRef<"DataTriaseIgd", 'String'>
    readonly nyeri: FieldRef<"DataTriaseIgd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataTriaseIgd findUnique
   */
  export type DataTriaseIgdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * Filter, which DataTriaseIgd to fetch.
     */
    where: DataTriaseIgdWhereUniqueInput
  }

  /**
   * DataTriaseIgd findUniqueOrThrow
   */
  export type DataTriaseIgdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * Filter, which DataTriaseIgd to fetch.
     */
    where: DataTriaseIgdWhereUniqueInput
  }

  /**
   * DataTriaseIgd findFirst
   */
  export type DataTriaseIgdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * Filter, which DataTriaseIgd to fetch.
     */
    where?: DataTriaseIgdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataTriaseIgds to fetch.
     */
    orderBy?: DataTriaseIgdOrderByWithRelationInput | DataTriaseIgdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataTriaseIgds.
     */
    cursor?: DataTriaseIgdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataTriaseIgds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataTriaseIgds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataTriaseIgds.
     */
    distinct?: DataTriaseIgdScalarFieldEnum | DataTriaseIgdScalarFieldEnum[]
  }

  /**
   * DataTriaseIgd findFirstOrThrow
   */
  export type DataTriaseIgdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * Filter, which DataTriaseIgd to fetch.
     */
    where?: DataTriaseIgdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataTriaseIgds to fetch.
     */
    orderBy?: DataTriaseIgdOrderByWithRelationInput | DataTriaseIgdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataTriaseIgds.
     */
    cursor?: DataTriaseIgdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataTriaseIgds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataTriaseIgds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataTriaseIgds.
     */
    distinct?: DataTriaseIgdScalarFieldEnum | DataTriaseIgdScalarFieldEnum[]
  }

  /**
   * DataTriaseIgd findMany
   */
  export type DataTriaseIgdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * Filter, which DataTriaseIgds to fetch.
     */
    where?: DataTriaseIgdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataTriaseIgds to fetch.
     */
    orderBy?: DataTriaseIgdOrderByWithRelationInput | DataTriaseIgdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataTriaseIgds.
     */
    cursor?: DataTriaseIgdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataTriaseIgds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataTriaseIgds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataTriaseIgds.
     */
    distinct?: DataTriaseIgdScalarFieldEnum | DataTriaseIgdScalarFieldEnum[]
  }

  /**
   * DataTriaseIgd create
   */
  export type DataTriaseIgdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * The data needed to create a DataTriaseIgd.
     */
    data: XOR<DataTriaseIgdCreateInput, DataTriaseIgdUncheckedCreateInput>
  }

  /**
   * DataTriaseIgd createMany
   */
  export type DataTriaseIgdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataTriaseIgds.
     */
    data: DataTriaseIgdCreateManyInput | DataTriaseIgdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataTriaseIgd update
   */
  export type DataTriaseIgdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * The data needed to update a DataTriaseIgd.
     */
    data: XOR<DataTriaseIgdUpdateInput, DataTriaseIgdUncheckedUpdateInput>
    /**
     * Choose, which DataTriaseIgd to update.
     */
    where: DataTriaseIgdWhereUniqueInput
  }

  /**
   * DataTriaseIgd updateMany
   */
  export type DataTriaseIgdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataTriaseIgds.
     */
    data: XOR<DataTriaseIgdUpdateManyMutationInput, DataTriaseIgdUncheckedUpdateManyInput>
    /**
     * Filter which DataTriaseIgds to update
     */
    where?: DataTriaseIgdWhereInput
    /**
     * Limit how many DataTriaseIgds to update.
     */
    limit?: number
  }

  /**
   * DataTriaseIgd upsert
   */
  export type DataTriaseIgdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * The filter to search for the DataTriaseIgd to update in case it exists.
     */
    where: DataTriaseIgdWhereUniqueInput
    /**
     * In case the DataTriaseIgd found by the `where` argument doesn't exist, create a new DataTriaseIgd with this data.
     */
    create: XOR<DataTriaseIgdCreateInput, DataTriaseIgdUncheckedCreateInput>
    /**
     * In case the DataTriaseIgd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataTriaseIgdUpdateInput, DataTriaseIgdUncheckedUpdateInput>
  }

  /**
   * DataTriaseIgd delete
   */
  export type DataTriaseIgdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
    /**
     * Filter which DataTriaseIgd to delete.
     */
    where: DataTriaseIgdWhereUniqueInput
  }

  /**
   * DataTriaseIgd deleteMany
   */
  export type DataTriaseIgdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataTriaseIgds to delete
     */
    where?: DataTriaseIgdWhereInput
    /**
     * Limit how many DataTriaseIgds to delete.
     */
    limit?: number
  }

  /**
   * DataTriaseIgd without action
   */
  export type DataTriaseIgdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataTriaseIgd
     */
    select?: DataTriaseIgdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataTriaseIgd
     */
    omit?: DataTriaseIgdOmit<ExtArgs> | null
  }


  /**
   * Model DetailNotaJalan
   */

  export type AggregateDetailNotaJalan = {
    _count: DetailNotaJalanCountAggregateOutputType | null
    _avg: DetailNotaJalanAvgAggregateOutputType | null
    _sum: DetailNotaJalanSumAggregateOutputType | null
    _min: DetailNotaJalanMinAggregateOutputType | null
    _max: DetailNotaJalanMaxAggregateOutputType | null
  }

  export type DetailNotaJalanAvgAggregateOutputType = {
    besarppn: number | null
    besarBayar: number | null
  }

  export type DetailNotaJalanSumAggregateOutputType = {
    besarppn: number | null
    besarBayar: number | null
  }

  export type DetailNotaJalanMinAggregateOutputType = {
    noRawat: string | null
    namaBayar: string | null
    besarppn: number | null
    besarBayar: number | null
  }

  export type DetailNotaJalanMaxAggregateOutputType = {
    noRawat: string | null
    namaBayar: string | null
    besarppn: number | null
    besarBayar: number | null
  }

  export type DetailNotaJalanCountAggregateOutputType = {
    noRawat: number
    namaBayar: number
    besarppn: number
    besarBayar: number
    _all: number
  }


  export type DetailNotaJalanAvgAggregateInputType = {
    besarppn?: true
    besarBayar?: true
  }

  export type DetailNotaJalanSumAggregateInputType = {
    besarppn?: true
    besarBayar?: true
  }

  export type DetailNotaJalanMinAggregateInputType = {
    noRawat?: true
    namaBayar?: true
    besarppn?: true
    besarBayar?: true
  }

  export type DetailNotaJalanMaxAggregateInputType = {
    noRawat?: true
    namaBayar?: true
    besarppn?: true
    besarBayar?: true
  }

  export type DetailNotaJalanCountAggregateInputType = {
    noRawat?: true
    namaBayar?: true
    besarppn?: true
    besarBayar?: true
    _all?: true
  }

  export type DetailNotaJalanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailNotaJalan to aggregate.
     */
    where?: DetailNotaJalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailNotaJalans to fetch.
     */
    orderBy?: DetailNotaJalanOrderByWithRelationInput | DetailNotaJalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailNotaJalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailNotaJalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailNotaJalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailNotaJalans
    **/
    _count?: true | DetailNotaJalanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailNotaJalanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailNotaJalanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailNotaJalanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailNotaJalanMaxAggregateInputType
  }

  export type GetDetailNotaJalanAggregateType<T extends DetailNotaJalanAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailNotaJalan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailNotaJalan[P]>
      : GetScalarType<T[P], AggregateDetailNotaJalan[P]>
  }




  export type DetailNotaJalanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailNotaJalanWhereInput
    orderBy?: DetailNotaJalanOrderByWithAggregationInput | DetailNotaJalanOrderByWithAggregationInput[]
    by: DetailNotaJalanScalarFieldEnum[] | DetailNotaJalanScalarFieldEnum
    having?: DetailNotaJalanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailNotaJalanCountAggregateInputType | true
    _avg?: DetailNotaJalanAvgAggregateInputType
    _sum?: DetailNotaJalanSumAggregateInputType
    _min?: DetailNotaJalanMinAggregateInputType
    _max?: DetailNotaJalanMaxAggregateInputType
  }

  export type DetailNotaJalanGroupByOutputType = {
    noRawat: string
    namaBayar: string
    besarppn: number
    besarBayar: number
    _count: DetailNotaJalanCountAggregateOutputType | null
    _avg: DetailNotaJalanAvgAggregateOutputType | null
    _sum: DetailNotaJalanSumAggregateOutputType | null
    _min: DetailNotaJalanMinAggregateOutputType | null
    _max: DetailNotaJalanMaxAggregateOutputType | null
  }

  type GetDetailNotaJalanGroupByPayload<T extends DetailNotaJalanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailNotaJalanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailNotaJalanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailNotaJalanGroupByOutputType[P]>
            : GetScalarType<T[P], DetailNotaJalanGroupByOutputType[P]>
        }
      >
    >


  export type DetailNotaJalanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noRawat?: boolean
    namaBayar?: boolean
    besarppn?: boolean
    besarBayar?: boolean
    regPeriksa?: boolean | RegPeriksaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailNotaJalan"]>



  export type DetailNotaJalanSelectScalar = {
    noRawat?: boolean
    namaBayar?: boolean
    besarppn?: boolean
    besarBayar?: boolean
  }

  export type DetailNotaJalanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"noRawat" | "namaBayar" | "besarppn" | "besarBayar", ExtArgs["result"]["detailNotaJalan"]>
  export type DetailNotaJalanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regPeriksa?: boolean | RegPeriksaDefaultArgs<ExtArgs>
  }

  export type $DetailNotaJalanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailNotaJalan"
    objects: {
      regPeriksa: Prisma.$RegPeriksaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      noRawat: string
      namaBayar: string
      besarppn: number
      besarBayar: number
    }, ExtArgs["result"]["detailNotaJalan"]>
    composites: {}
  }

  type DetailNotaJalanGetPayload<S extends boolean | null | undefined | DetailNotaJalanDefaultArgs> = $Result.GetResult<Prisma.$DetailNotaJalanPayload, S>

  type DetailNotaJalanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailNotaJalanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailNotaJalanCountAggregateInputType | true
    }

  export interface DetailNotaJalanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailNotaJalan'], meta: { name: 'DetailNotaJalan' } }
    /**
     * Find zero or one DetailNotaJalan that matches the filter.
     * @param {DetailNotaJalanFindUniqueArgs} args - Arguments to find a DetailNotaJalan
     * @example
     * // Get one DetailNotaJalan
     * const detailNotaJalan = await prisma.detailNotaJalan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailNotaJalanFindUniqueArgs>(args: SelectSubset<T, DetailNotaJalanFindUniqueArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailNotaJalan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailNotaJalanFindUniqueOrThrowArgs} args - Arguments to find a DetailNotaJalan
     * @example
     * // Get one DetailNotaJalan
     * const detailNotaJalan = await prisma.detailNotaJalan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailNotaJalanFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailNotaJalanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailNotaJalan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanFindFirstArgs} args - Arguments to find a DetailNotaJalan
     * @example
     * // Get one DetailNotaJalan
     * const detailNotaJalan = await prisma.detailNotaJalan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailNotaJalanFindFirstArgs>(args?: SelectSubset<T, DetailNotaJalanFindFirstArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailNotaJalan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanFindFirstOrThrowArgs} args - Arguments to find a DetailNotaJalan
     * @example
     * // Get one DetailNotaJalan
     * const detailNotaJalan = await prisma.detailNotaJalan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailNotaJalanFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailNotaJalanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailNotaJalans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailNotaJalans
     * const detailNotaJalans = await prisma.detailNotaJalan.findMany()
     * 
     * // Get first 10 DetailNotaJalans
     * const detailNotaJalans = await prisma.detailNotaJalan.findMany({ take: 10 })
     * 
     * // Only select the `noRawat`
     * const detailNotaJalanWithNoRawatOnly = await prisma.detailNotaJalan.findMany({ select: { noRawat: true } })
     * 
     */
    findMany<T extends DetailNotaJalanFindManyArgs>(args?: SelectSubset<T, DetailNotaJalanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailNotaJalan.
     * @param {DetailNotaJalanCreateArgs} args - Arguments to create a DetailNotaJalan.
     * @example
     * // Create one DetailNotaJalan
     * const DetailNotaJalan = await prisma.detailNotaJalan.create({
     *   data: {
     *     // ... data to create a DetailNotaJalan
     *   }
     * })
     * 
     */
    create<T extends DetailNotaJalanCreateArgs>(args: SelectSubset<T, DetailNotaJalanCreateArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailNotaJalans.
     * @param {DetailNotaJalanCreateManyArgs} args - Arguments to create many DetailNotaJalans.
     * @example
     * // Create many DetailNotaJalans
     * const detailNotaJalan = await prisma.detailNotaJalan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailNotaJalanCreateManyArgs>(args?: SelectSubset<T, DetailNotaJalanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailNotaJalan.
     * @param {DetailNotaJalanDeleteArgs} args - Arguments to delete one DetailNotaJalan.
     * @example
     * // Delete one DetailNotaJalan
     * const DetailNotaJalan = await prisma.detailNotaJalan.delete({
     *   where: {
     *     // ... filter to delete one DetailNotaJalan
     *   }
     * })
     * 
     */
    delete<T extends DetailNotaJalanDeleteArgs>(args: SelectSubset<T, DetailNotaJalanDeleteArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailNotaJalan.
     * @param {DetailNotaJalanUpdateArgs} args - Arguments to update one DetailNotaJalan.
     * @example
     * // Update one DetailNotaJalan
     * const detailNotaJalan = await prisma.detailNotaJalan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailNotaJalanUpdateArgs>(args: SelectSubset<T, DetailNotaJalanUpdateArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailNotaJalans.
     * @param {DetailNotaJalanDeleteManyArgs} args - Arguments to filter DetailNotaJalans to delete.
     * @example
     * // Delete a few DetailNotaJalans
     * const { count } = await prisma.detailNotaJalan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailNotaJalanDeleteManyArgs>(args?: SelectSubset<T, DetailNotaJalanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailNotaJalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailNotaJalans
     * const detailNotaJalan = await prisma.detailNotaJalan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailNotaJalanUpdateManyArgs>(args: SelectSubset<T, DetailNotaJalanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailNotaJalan.
     * @param {DetailNotaJalanUpsertArgs} args - Arguments to update or create a DetailNotaJalan.
     * @example
     * // Update or create a DetailNotaJalan
     * const detailNotaJalan = await prisma.detailNotaJalan.upsert({
     *   create: {
     *     // ... data to create a DetailNotaJalan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailNotaJalan we want to update
     *   }
     * })
     */
    upsert<T extends DetailNotaJalanUpsertArgs>(args: SelectSubset<T, DetailNotaJalanUpsertArgs<ExtArgs>>): Prisma__DetailNotaJalanClient<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailNotaJalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanCountArgs} args - Arguments to filter DetailNotaJalans to count.
     * @example
     * // Count the number of DetailNotaJalans
     * const count = await prisma.detailNotaJalan.count({
     *   where: {
     *     // ... the filter for the DetailNotaJalans we want to count
     *   }
     * })
    **/
    count<T extends DetailNotaJalanCountArgs>(
      args?: Subset<T, DetailNotaJalanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailNotaJalanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailNotaJalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailNotaJalanAggregateArgs>(args: Subset<T, DetailNotaJalanAggregateArgs>): Prisma.PrismaPromise<GetDetailNotaJalanAggregateType<T>>

    /**
     * Group by DetailNotaJalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailNotaJalanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailNotaJalanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailNotaJalanGroupByArgs['orderBy'] }
        : { orderBy?: DetailNotaJalanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailNotaJalanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailNotaJalanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailNotaJalan model
   */
  readonly fields: DetailNotaJalanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailNotaJalan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailNotaJalanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regPeriksa<T extends RegPeriksaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegPeriksaDefaultArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetailNotaJalan model
   */
  interface DetailNotaJalanFieldRefs {
    readonly noRawat: FieldRef<"DetailNotaJalan", 'String'>
    readonly namaBayar: FieldRef<"DetailNotaJalan", 'String'>
    readonly besarppn: FieldRef<"DetailNotaJalan", 'Float'>
    readonly besarBayar: FieldRef<"DetailNotaJalan", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DetailNotaJalan findUnique
   */
  export type DetailNotaJalanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * Filter, which DetailNotaJalan to fetch.
     */
    where: DetailNotaJalanWhereUniqueInput
  }

  /**
   * DetailNotaJalan findUniqueOrThrow
   */
  export type DetailNotaJalanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * Filter, which DetailNotaJalan to fetch.
     */
    where: DetailNotaJalanWhereUniqueInput
  }

  /**
   * DetailNotaJalan findFirst
   */
  export type DetailNotaJalanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * Filter, which DetailNotaJalan to fetch.
     */
    where?: DetailNotaJalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailNotaJalans to fetch.
     */
    orderBy?: DetailNotaJalanOrderByWithRelationInput | DetailNotaJalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailNotaJalans.
     */
    cursor?: DetailNotaJalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailNotaJalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailNotaJalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailNotaJalans.
     */
    distinct?: DetailNotaJalanScalarFieldEnum | DetailNotaJalanScalarFieldEnum[]
  }

  /**
   * DetailNotaJalan findFirstOrThrow
   */
  export type DetailNotaJalanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * Filter, which DetailNotaJalan to fetch.
     */
    where?: DetailNotaJalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailNotaJalans to fetch.
     */
    orderBy?: DetailNotaJalanOrderByWithRelationInput | DetailNotaJalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailNotaJalans.
     */
    cursor?: DetailNotaJalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailNotaJalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailNotaJalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailNotaJalans.
     */
    distinct?: DetailNotaJalanScalarFieldEnum | DetailNotaJalanScalarFieldEnum[]
  }

  /**
   * DetailNotaJalan findMany
   */
  export type DetailNotaJalanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * Filter, which DetailNotaJalans to fetch.
     */
    where?: DetailNotaJalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailNotaJalans to fetch.
     */
    orderBy?: DetailNotaJalanOrderByWithRelationInput | DetailNotaJalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailNotaJalans.
     */
    cursor?: DetailNotaJalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailNotaJalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailNotaJalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailNotaJalans.
     */
    distinct?: DetailNotaJalanScalarFieldEnum | DetailNotaJalanScalarFieldEnum[]
  }

  /**
   * DetailNotaJalan create
   */
  export type DetailNotaJalanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailNotaJalan.
     */
    data: XOR<DetailNotaJalanCreateInput, DetailNotaJalanUncheckedCreateInput>
  }

  /**
   * DetailNotaJalan createMany
   */
  export type DetailNotaJalanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailNotaJalans.
     */
    data: DetailNotaJalanCreateManyInput | DetailNotaJalanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailNotaJalan update
   */
  export type DetailNotaJalanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailNotaJalan.
     */
    data: XOR<DetailNotaJalanUpdateInput, DetailNotaJalanUncheckedUpdateInput>
    /**
     * Choose, which DetailNotaJalan to update.
     */
    where: DetailNotaJalanWhereUniqueInput
  }

  /**
   * DetailNotaJalan updateMany
   */
  export type DetailNotaJalanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailNotaJalans.
     */
    data: XOR<DetailNotaJalanUpdateManyMutationInput, DetailNotaJalanUncheckedUpdateManyInput>
    /**
     * Filter which DetailNotaJalans to update
     */
    where?: DetailNotaJalanWhereInput
    /**
     * Limit how many DetailNotaJalans to update.
     */
    limit?: number
  }

  /**
   * DetailNotaJalan upsert
   */
  export type DetailNotaJalanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailNotaJalan to update in case it exists.
     */
    where: DetailNotaJalanWhereUniqueInput
    /**
     * In case the DetailNotaJalan found by the `where` argument doesn't exist, create a new DetailNotaJalan with this data.
     */
    create: XOR<DetailNotaJalanCreateInput, DetailNotaJalanUncheckedCreateInput>
    /**
     * In case the DetailNotaJalan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailNotaJalanUpdateInput, DetailNotaJalanUncheckedUpdateInput>
  }

  /**
   * DetailNotaJalan delete
   */
  export type DetailNotaJalanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    /**
     * Filter which DetailNotaJalan to delete.
     */
    where: DetailNotaJalanWhereUniqueInput
  }

  /**
   * DetailNotaJalan deleteMany
   */
  export type DetailNotaJalanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailNotaJalans to delete
     */
    where?: DetailNotaJalanWhereInput
    /**
     * Limit how many DetailNotaJalans to delete.
     */
    limit?: number
  }

  /**
   * DetailNotaJalan without action
   */
  export type DetailNotaJalanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
  }


  /**
   * Model Kamar
   */

  export type AggregateKamar = {
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  export type KamarAvgAggregateOutputType = {
    tarifKamar: number | null
  }

  export type KamarSumAggregateOutputType = {
    tarifKamar: number | null
  }

  export type KamarMinAggregateOutputType = {
    kdKamar: string | null
    kdBangsal: string | null
    tarifKamar: number | null
    status: $Enums.StatusKamar | null
    kelas: $Enums.KelasKamar | null
    statusData: $Enums.StatusData | null
  }

  export type KamarMaxAggregateOutputType = {
    kdKamar: string | null
    kdBangsal: string | null
    tarifKamar: number | null
    status: $Enums.StatusKamar | null
    kelas: $Enums.KelasKamar | null
    statusData: $Enums.StatusData | null
  }

  export type KamarCountAggregateOutputType = {
    kdKamar: number
    kdBangsal: number
    tarifKamar: number
    status: number
    kelas: number
    statusData: number
    _all: number
  }


  export type KamarAvgAggregateInputType = {
    tarifKamar?: true
  }

  export type KamarSumAggregateInputType = {
    tarifKamar?: true
  }

  export type KamarMinAggregateInputType = {
    kdKamar?: true
    kdBangsal?: true
    tarifKamar?: true
    status?: true
    kelas?: true
    statusData?: true
  }

  export type KamarMaxAggregateInputType = {
    kdKamar?: true
    kdBangsal?: true
    tarifKamar?: true
    status?: true
    kelas?: true
    statusData?: true
  }

  export type KamarCountAggregateInputType = {
    kdKamar?: true
    kdBangsal?: true
    tarifKamar?: true
    status?: true
    kelas?: true
    statusData?: true
    _all?: true
  }

  export type KamarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kamar to aggregate.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kamars
    **/
    _count?: true | KamarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KamarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KamarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KamarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KamarMaxAggregateInputType
  }

  export type GetKamarAggregateType<T extends KamarAggregateArgs> = {
        [P in keyof T & keyof AggregateKamar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKamar[P]>
      : GetScalarType<T[P], AggregateKamar[P]>
  }




  export type KamarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KamarWhereInput
    orderBy?: KamarOrderByWithAggregationInput | KamarOrderByWithAggregationInput[]
    by: KamarScalarFieldEnum[] | KamarScalarFieldEnum
    having?: KamarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KamarCountAggregateInputType | true
    _avg?: KamarAvgAggregateInputType
    _sum?: KamarSumAggregateInputType
    _min?: KamarMinAggregateInputType
    _max?: KamarMaxAggregateInputType
  }

  export type KamarGroupByOutputType = {
    kdKamar: string
    kdBangsal: string
    tarifKamar: number
    status: $Enums.StatusKamar
    kelas: $Enums.KelasKamar
    statusData: $Enums.StatusData
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  type GetKamarGroupByPayload<T extends KamarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KamarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KamarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KamarGroupByOutputType[P]>
            : GetScalarType<T[P], KamarGroupByOutputType[P]>
        }
      >
    >


  export type KamarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kdKamar?: boolean
    kdBangsal?: boolean
    tarifKamar?: boolean
    status?: boolean
    kelas?: boolean
    statusData?: boolean
  }, ExtArgs["result"]["kamar"]>



  export type KamarSelectScalar = {
    kdKamar?: boolean
    kdBangsal?: boolean
    tarifKamar?: boolean
    status?: boolean
    kelas?: boolean
    statusData?: boolean
  }

  export type KamarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kdKamar" | "kdBangsal" | "tarifKamar" | "status" | "kelas" | "statusData", ExtArgs["result"]["kamar"]>

  export type $KamarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kamar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kdKamar: string
      kdBangsal: string
      tarifKamar: number
      status: $Enums.StatusKamar
      kelas: $Enums.KelasKamar
      statusData: $Enums.StatusData
    }, ExtArgs["result"]["kamar"]>
    composites: {}
  }

  type KamarGetPayload<S extends boolean | null | undefined | KamarDefaultArgs> = $Result.GetResult<Prisma.$KamarPayload, S>

  type KamarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KamarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KamarCountAggregateInputType | true
    }

  export interface KamarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kamar'], meta: { name: 'Kamar' } }
    /**
     * Find zero or one Kamar that matches the filter.
     * @param {KamarFindUniqueArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KamarFindUniqueArgs>(args: SelectSubset<T, KamarFindUniqueArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kamar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KamarFindUniqueOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KamarFindUniqueOrThrowArgs>(args: SelectSubset<T, KamarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kamar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindFirstArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KamarFindFirstArgs>(args?: SelectSubset<T, KamarFindFirstArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kamar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindFirstOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KamarFindFirstOrThrowArgs>(args?: SelectSubset<T, KamarFindFirstOrThrowArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kamars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kamars
     * const kamars = await prisma.kamar.findMany()
     * 
     * // Get first 10 Kamars
     * const kamars = await prisma.kamar.findMany({ take: 10 })
     * 
     * // Only select the `kdKamar`
     * const kamarWithKdKamarOnly = await prisma.kamar.findMany({ select: { kdKamar: true } })
     * 
     */
    findMany<T extends KamarFindManyArgs>(args?: SelectSubset<T, KamarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kamar.
     * @param {KamarCreateArgs} args - Arguments to create a Kamar.
     * @example
     * // Create one Kamar
     * const Kamar = await prisma.kamar.create({
     *   data: {
     *     // ... data to create a Kamar
     *   }
     * })
     * 
     */
    create<T extends KamarCreateArgs>(args: SelectSubset<T, KamarCreateArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kamars.
     * @param {KamarCreateManyArgs} args - Arguments to create many Kamars.
     * @example
     * // Create many Kamars
     * const kamar = await prisma.kamar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KamarCreateManyArgs>(args?: SelectSubset<T, KamarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kamar.
     * @param {KamarDeleteArgs} args - Arguments to delete one Kamar.
     * @example
     * // Delete one Kamar
     * const Kamar = await prisma.kamar.delete({
     *   where: {
     *     // ... filter to delete one Kamar
     *   }
     * })
     * 
     */
    delete<T extends KamarDeleteArgs>(args: SelectSubset<T, KamarDeleteArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kamar.
     * @param {KamarUpdateArgs} args - Arguments to update one Kamar.
     * @example
     * // Update one Kamar
     * const kamar = await prisma.kamar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KamarUpdateArgs>(args: SelectSubset<T, KamarUpdateArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kamars.
     * @param {KamarDeleteManyArgs} args - Arguments to filter Kamars to delete.
     * @example
     * // Delete a few Kamars
     * const { count } = await prisma.kamar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KamarDeleteManyArgs>(args?: SelectSubset<T, KamarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kamars
     * const kamar = await prisma.kamar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KamarUpdateManyArgs>(args: SelectSubset<T, KamarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kamar.
     * @param {KamarUpsertArgs} args - Arguments to update or create a Kamar.
     * @example
     * // Update or create a Kamar
     * const kamar = await prisma.kamar.upsert({
     *   create: {
     *     // ... data to create a Kamar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kamar we want to update
     *   }
     * })
     */
    upsert<T extends KamarUpsertArgs>(args: SelectSubset<T, KamarUpsertArgs<ExtArgs>>): Prisma__KamarClient<$Result.GetResult<Prisma.$KamarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarCountArgs} args - Arguments to filter Kamars to count.
     * @example
     * // Count the number of Kamars
     * const count = await prisma.kamar.count({
     *   where: {
     *     // ... the filter for the Kamars we want to count
     *   }
     * })
    **/
    count<T extends KamarCountArgs>(
      args?: Subset<T, KamarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KamarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KamarAggregateArgs>(args: Subset<T, KamarAggregateArgs>): Prisma.PrismaPromise<GetKamarAggregateType<T>>

    /**
     * Group by Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KamarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KamarGroupByArgs['orderBy'] }
        : { orderBy?: KamarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KamarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKamarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kamar model
   */
  readonly fields: KamarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kamar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KamarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kamar model
   */
  interface KamarFieldRefs {
    readonly kdKamar: FieldRef<"Kamar", 'String'>
    readonly kdBangsal: FieldRef<"Kamar", 'String'>
    readonly tarifKamar: FieldRef<"Kamar", 'Float'>
    readonly status: FieldRef<"Kamar", 'StatusKamar'>
    readonly kelas: FieldRef<"Kamar", 'KelasKamar'>
    readonly statusData: FieldRef<"Kamar", 'StatusData'>
  }
    

  // Custom InputTypes
  /**
   * Kamar findUnique
   */
  export type KamarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar findUniqueOrThrow
   */
  export type KamarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar findFirst
   */
  export type KamarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar findFirstOrThrow
   */
  export type KamarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Filter, which Kamar to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar findMany
   */
  export type KamarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Filter, which Kamars to fetch.
     */
    where?: KamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kamars to fetch.
     */
    orderBy?: KamarOrderByWithRelationInput | KamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kamars.
     */
    cursor?: KamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * Kamar create
   */
  export type KamarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * The data needed to create a Kamar.
     */
    data: XOR<KamarCreateInput, KamarUncheckedCreateInput>
  }

  /**
   * Kamar createMany
   */
  export type KamarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kamars.
     */
    data: KamarCreateManyInput | KamarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kamar update
   */
  export type KamarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * The data needed to update a Kamar.
     */
    data: XOR<KamarUpdateInput, KamarUncheckedUpdateInput>
    /**
     * Choose, which Kamar to update.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar updateMany
   */
  export type KamarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kamars.
     */
    data: XOR<KamarUpdateManyMutationInput, KamarUncheckedUpdateManyInput>
    /**
     * Filter which Kamars to update
     */
    where?: KamarWhereInput
    /**
     * Limit how many Kamars to update.
     */
    limit?: number
  }

  /**
   * Kamar upsert
   */
  export type KamarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * The filter to search for the Kamar to update in case it exists.
     */
    where: KamarWhereUniqueInput
    /**
     * In case the Kamar found by the `where` argument doesn't exist, create a new Kamar with this data.
     */
    create: XOR<KamarCreateInput, KamarUncheckedCreateInput>
    /**
     * In case the Kamar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KamarUpdateInput, KamarUncheckedUpdateInput>
  }

  /**
   * Kamar delete
   */
  export type KamarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
    /**
     * Filter which Kamar to delete.
     */
    where: KamarWhereUniqueInput
  }

  /**
   * Kamar deleteMany
   */
  export type KamarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kamars to delete
     */
    where?: KamarWhereInput
    /**
     * Limit how many Kamars to delete.
     */
    limit?: number
  }

  /**
   * Kamar without action
   */
  export type KamarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kamar
     */
    select?: KamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kamar
     */
    omit?: KamarOmit<ExtArgs> | null
  }


  /**
   * Model PeriksaLab
   */

  export type AggregatePeriksaLab = {
    _count: PeriksaLabCountAggregateOutputType | null
    _avg: PeriksaLabAvgAggregateOutputType | null
    _sum: PeriksaLabSumAggregateOutputType | null
    _min: PeriksaLabMinAggregateOutputType | null
    _max: PeriksaLabMaxAggregateOutputType | null
  }

  export type PeriksaLabAvgAggregateOutputType = {
    bagian_rs: number | null
    bhp: number | null
    tarif_perujuk: number | null
    tarif_tindakan_dokter: number | null
    tarif_tindakan_petugas: number | null
    kso: number | null
    menejemen: number | null
    biaya: number | null
  }

  export type PeriksaLabSumAggregateOutputType = {
    bagian_rs: number | null
    bhp: number | null
    tarif_perujuk: number | null
    tarif_tindakan_dokter: number | null
    tarif_tindakan_petugas: number | null
    kso: number | null
    menejemen: number | null
    biaya: number | null
  }

  export type PeriksaLabMinAggregateOutputType = {
    no_rawat: string | null
    nip: string | null
    kd_jenis_prw: string | null
    tgl_periksa: Date | null
    jam: Date | null
    dokter_perujuk: string | null
    bagian_rs: number | null
    bhp: number | null
    tarif_perujuk: number | null
    tarif_tindakan_dokter: number | null
    tarif_tindakan_petugas: number | null
    kso: number | null
    menejemen: number | null
    biaya: number | null
    kd_dokter: string | null
    status: $Enums.StatusPeriksaLab | null
    kategori: $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabMaxAggregateOutputType = {
    no_rawat: string | null
    nip: string | null
    kd_jenis_prw: string | null
    tgl_periksa: Date | null
    jam: Date | null
    dokter_perujuk: string | null
    bagian_rs: number | null
    bhp: number | null
    tarif_perujuk: number | null
    tarif_tindakan_dokter: number | null
    tarif_tindakan_petugas: number | null
    kso: number | null
    menejemen: number | null
    biaya: number | null
    kd_dokter: string | null
    status: $Enums.StatusPeriksaLab | null
    kategori: $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabCountAggregateOutputType = {
    no_rawat: number
    nip: number
    kd_jenis_prw: number
    tgl_periksa: number
    jam: number
    dokter_perujuk: number
    bagian_rs: number
    bhp: number
    tarif_perujuk: number
    tarif_tindakan_dokter: number
    tarif_tindakan_petugas: number
    kso: number
    menejemen: number
    biaya: number
    kd_dokter: number
    status: number
    kategori: number
    _all: number
  }


  export type PeriksaLabAvgAggregateInputType = {
    bagian_rs?: true
    bhp?: true
    tarif_perujuk?: true
    tarif_tindakan_dokter?: true
    tarif_tindakan_petugas?: true
    kso?: true
    menejemen?: true
    biaya?: true
  }

  export type PeriksaLabSumAggregateInputType = {
    bagian_rs?: true
    bhp?: true
    tarif_perujuk?: true
    tarif_tindakan_dokter?: true
    tarif_tindakan_petugas?: true
    kso?: true
    menejemen?: true
    biaya?: true
  }

  export type PeriksaLabMinAggregateInputType = {
    no_rawat?: true
    nip?: true
    kd_jenis_prw?: true
    tgl_periksa?: true
    jam?: true
    dokter_perujuk?: true
    bagian_rs?: true
    bhp?: true
    tarif_perujuk?: true
    tarif_tindakan_dokter?: true
    tarif_tindakan_petugas?: true
    kso?: true
    menejemen?: true
    biaya?: true
    kd_dokter?: true
    status?: true
    kategori?: true
  }

  export type PeriksaLabMaxAggregateInputType = {
    no_rawat?: true
    nip?: true
    kd_jenis_prw?: true
    tgl_periksa?: true
    jam?: true
    dokter_perujuk?: true
    bagian_rs?: true
    bhp?: true
    tarif_perujuk?: true
    tarif_tindakan_dokter?: true
    tarif_tindakan_petugas?: true
    kso?: true
    menejemen?: true
    biaya?: true
    kd_dokter?: true
    status?: true
    kategori?: true
  }

  export type PeriksaLabCountAggregateInputType = {
    no_rawat?: true
    nip?: true
    kd_jenis_prw?: true
    tgl_periksa?: true
    jam?: true
    dokter_perujuk?: true
    bagian_rs?: true
    bhp?: true
    tarif_perujuk?: true
    tarif_tindakan_dokter?: true
    tarif_tindakan_petugas?: true
    kso?: true
    menejemen?: true
    biaya?: true
    kd_dokter?: true
    status?: true
    kategori?: true
    _all?: true
  }

  export type PeriksaLabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeriksaLab to aggregate.
     */
    where?: PeriksaLabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriksaLabs to fetch.
     */
    orderBy?: PeriksaLabOrderByWithRelationInput | PeriksaLabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriksaLabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriksaLabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriksaLabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeriksaLabs
    **/
    _count?: true | PeriksaLabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriksaLabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriksaLabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriksaLabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriksaLabMaxAggregateInputType
  }

  export type GetPeriksaLabAggregateType<T extends PeriksaLabAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriksaLab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriksaLab[P]>
      : GetScalarType<T[P], AggregatePeriksaLab[P]>
  }




  export type PeriksaLabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriksaLabWhereInput
    orderBy?: PeriksaLabOrderByWithAggregationInput | PeriksaLabOrderByWithAggregationInput[]
    by: PeriksaLabScalarFieldEnum[] | PeriksaLabScalarFieldEnum
    having?: PeriksaLabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriksaLabCountAggregateInputType | true
    _avg?: PeriksaLabAvgAggregateInputType
    _sum?: PeriksaLabSumAggregateInputType
    _min?: PeriksaLabMinAggregateInputType
    _max?: PeriksaLabMaxAggregateInputType
  }

  export type PeriksaLabGroupByOutputType = {
    no_rawat: string
    nip: string | null
    kd_jenis_prw: string
    tgl_periksa: Date
    jam: Date
    dokter_perujuk: string | null
    bagian_rs: number | null
    bhp: number | null
    tarif_perujuk: number | null
    tarif_tindakan_dokter: number | null
    tarif_tindakan_petugas: number | null
    kso: number | null
    menejemen: number | null
    biaya: number | null
    kd_dokter: string | null
    status: $Enums.StatusPeriksaLab | null
    kategori: $Enums.KategoriPeriksaLab | null
    _count: PeriksaLabCountAggregateOutputType | null
    _avg: PeriksaLabAvgAggregateOutputType | null
    _sum: PeriksaLabSumAggregateOutputType | null
    _min: PeriksaLabMinAggregateOutputType | null
    _max: PeriksaLabMaxAggregateOutputType | null
  }

  type GetPeriksaLabGroupByPayload<T extends PeriksaLabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriksaLabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriksaLabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriksaLabGroupByOutputType[P]>
            : GetScalarType<T[P], PeriksaLabGroupByOutputType[P]>
        }
      >
    >


  export type PeriksaLabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_rawat?: boolean
    nip?: boolean
    kd_jenis_prw?: boolean
    tgl_periksa?: boolean
    jam?: boolean
    dokter_perujuk?: boolean
    bagian_rs?: boolean
    bhp?: boolean
    tarif_perujuk?: boolean
    tarif_tindakan_dokter?: boolean
    tarif_tindakan_petugas?: boolean
    kso?: boolean
    menejemen?: boolean
    biaya?: boolean
    kd_dokter?: boolean
    status?: boolean
    kategori?: boolean
  }, ExtArgs["result"]["periksaLab"]>



  export type PeriksaLabSelectScalar = {
    no_rawat?: boolean
    nip?: boolean
    kd_jenis_prw?: boolean
    tgl_periksa?: boolean
    jam?: boolean
    dokter_perujuk?: boolean
    bagian_rs?: boolean
    bhp?: boolean
    tarif_perujuk?: boolean
    tarif_tindakan_dokter?: boolean
    tarif_tindakan_petugas?: boolean
    kso?: boolean
    menejemen?: boolean
    biaya?: boolean
    kd_dokter?: boolean
    status?: boolean
    kategori?: boolean
  }

  export type PeriksaLabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_rawat" | "nip" | "kd_jenis_prw" | "tgl_periksa" | "jam" | "dokter_perujuk" | "bagian_rs" | "bhp" | "tarif_perujuk" | "tarif_tindakan_dokter" | "tarif_tindakan_petugas" | "kso" | "menejemen" | "biaya" | "kd_dokter" | "status" | "kategori", ExtArgs["result"]["periksaLab"]>

  export type $PeriksaLabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeriksaLab"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      no_rawat: string
      nip: string | null
      kd_jenis_prw: string
      tgl_periksa: Date
      jam: Date
      dokter_perujuk: string | null
      bagian_rs: number | null
      bhp: number | null
      tarif_perujuk: number | null
      tarif_tindakan_dokter: number | null
      tarif_tindakan_petugas: number | null
      kso: number | null
      menejemen: number | null
      biaya: number | null
      kd_dokter: string | null
      status: $Enums.StatusPeriksaLab | null
      kategori: $Enums.KategoriPeriksaLab | null
    }, ExtArgs["result"]["periksaLab"]>
    composites: {}
  }

  type PeriksaLabGetPayload<S extends boolean | null | undefined | PeriksaLabDefaultArgs> = $Result.GetResult<Prisma.$PeriksaLabPayload, S>

  type PeriksaLabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriksaLabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriksaLabCountAggregateInputType | true
    }

  export interface PeriksaLabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeriksaLab'], meta: { name: 'PeriksaLab' } }
    /**
     * Find zero or one PeriksaLab that matches the filter.
     * @param {PeriksaLabFindUniqueArgs} args - Arguments to find a PeriksaLab
     * @example
     * // Get one PeriksaLab
     * const periksaLab = await prisma.periksaLab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriksaLabFindUniqueArgs>(args: SelectSubset<T, PeriksaLabFindUniqueArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeriksaLab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriksaLabFindUniqueOrThrowArgs} args - Arguments to find a PeriksaLab
     * @example
     * // Get one PeriksaLab
     * const periksaLab = await prisma.periksaLab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriksaLabFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriksaLabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeriksaLab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabFindFirstArgs} args - Arguments to find a PeriksaLab
     * @example
     * // Get one PeriksaLab
     * const periksaLab = await prisma.periksaLab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriksaLabFindFirstArgs>(args?: SelectSubset<T, PeriksaLabFindFirstArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeriksaLab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabFindFirstOrThrowArgs} args - Arguments to find a PeriksaLab
     * @example
     * // Get one PeriksaLab
     * const periksaLab = await prisma.periksaLab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriksaLabFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriksaLabFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeriksaLabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeriksaLabs
     * const periksaLabs = await prisma.periksaLab.findMany()
     * 
     * // Get first 10 PeriksaLabs
     * const periksaLabs = await prisma.periksaLab.findMany({ take: 10 })
     * 
     * // Only select the `no_rawat`
     * const periksaLabWithNo_rawatOnly = await prisma.periksaLab.findMany({ select: { no_rawat: true } })
     * 
     */
    findMany<T extends PeriksaLabFindManyArgs>(args?: SelectSubset<T, PeriksaLabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeriksaLab.
     * @param {PeriksaLabCreateArgs} args - Arguments to create a PeriksaLab.
     * @example
     * // Create one PeriksaLab
     * const PeriksaLab = await prisma.periksaLab.create({
     *   data: {
     *     // ... data to create a PeriksaLab
     *   }
     * })
     * 
     */
    create<T extends PeriksaLabCreateArgs>(args: SelectSubset<T, PeriksaLabCreateArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeriksaLabs.
     * @param {PeriksaLabCreateManyArgs} args - Arguments to create many PeriksaLabs.
     * @example
     * // Create many PeriksaLabs
     * const periksaLab = await prisma.periksaLab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriksaLabCreateManyArgs>(args?: SelectSubset<T, PeriksaLabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PeriksaLab.
     * @param {PeriksaLabDeleteArgs} args - Arguments to delete one PeriksaLab.
     * @example
     * // Delete one PeriksaLab
     * const PeriksaLab = await prisma.periksaLab.delete({
     *   where: {
     *     // ... filter to delete one PeriksaLab
     *   }
     * })
     * 
     */
    delete<T extends PeriksaLabDeleteArgs>(args: SelectSubset<T, PeriksaLabDeleteArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeriksaLab.
     * @param {PeriksaLabUpdateArgs} args - Arguments to update one PeriksaLab.
     * @example
     * // Update one PeriksaLab
     * const periksaLab = await prisma.periksaLab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriksaLabUpdateArgs>(args: SelectSubset<T, PeriksaLabUpdateArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeriksaLabs.
     * @param {PeriksaLabDeleteManyArgs} args - Arguments to filter PeriksaLabs to delete.
     * @example
     * // Delete a few PeriksaLabs
     * const { count } = await prisma.periksaLab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriksaLabDeleteManyArgs>(args?: SelectSubset<T, PeriksaLabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeriksaLabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeriksaLabs
     * const periksaLab = await prisma.periksaLab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriksaLabUpdateManyArgs>(args: SelectSubset<T, PeriksaLabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PeriksaLab.
     * @param {PeriksaLabUpsertArgs} args - Arguments to update or create a PeriksaLab.
     * @example
     * // Update or create a PeriksaLab
     * const periksaLab = await prisma.periksaLab.upsert({
     *   create: {
     *     // ... data to create a PeriksaLab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeriksaLab we want to update
     *   }
     * })
     */
    upsert<T extends PeriksaLabUpsertArgs>(args: SelectSubset<T, PeriksaLabUpsertArgs<ExtArgs>>): Prisma__PeriksaLabClient<$Result.GetResult<Prisma.$PeriksaLabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeriksaLabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabCountArgs} args - Arguments to filter PeriksaLabs to count.
     * @example
     * // Count the number of PeriksaLabs
     * const count = await prisma.periksaLab.count({
     *   where: {
     *     // ... the filter for the PeriksaLabs we want to count
     *   }
     * })
    **/
    count<T extends PeriksaLabCountArgs>(
      args?: Subset<T, PeriksaLabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriksaLabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeriksaLab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriksaLabAggregateArgs>(args: Subset<T, PeriksaLabAggregateArgs>): Prisma.PrismaPromise<GetPeriksaLabAggregateType<T>>

    /**
     * Group by PeriksaLab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriksaLabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriksaLabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriksaLabGroupByArgs['orderBy'] }
        : { orderBy?: PeriksaLabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriksaLabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriksaLabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeriksaLab model
   */
  readonly fields: PeriksaLabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeriksaLab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriksaLabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeriksaLab model
   */
  interface PeriksaLabFieldRefs {
    readonly no_rawat: FieldRef<"PeriksaLab", 'String'>
    readonly nip: FieldRef<"PeriksaLab", 'String'>
    readonly kd_jenis_prw: FieldRef<"PeriksaLab", 'String'>
    readonly tgl_periksa: FieldRef<"PeriksaLab", 'DateTime'>
    readonly jam: FieldRef<"PeriksaLab", 'DateTime'>
    readonly dokter_perujuk: FieldRef<"PeriksaLab", 'String'>
    readonly bagian_rs: FieldRef<"PeriksaLab", 'Float'>
    readonly bhp: FieldRef<"PeriksaLab", 'Float'>
    readonly tarif_perujuk: FieldRef<"PeriksaLab", 'Float'>
    readonly tarif_tindakan_dokter: FieldRef<"PeriksaLab", 'Float'>
    readonly tarif_tindakan_petugas: FieldRef<"PeriksaLab", 'Float'>
    readonly kso: FieldRef<"PeriksaLab", 'Float'>
    readonly menejemen: FieldRef<"PeriksaLab", 'Float'>
    readonly biaya: FieldRef<"PeriksaLab", 'Float'>
    readonly kd_dokter: FieldRef<"PeriksaLab", 'String'>
    readonly status: FieldRef<"PeriksaLab", 'StatusPeriksaLab'>
    readonly kategori: FieldRef<"PeriksaLab", 'KategoriPeriksaLab'>
  }
    

  // Custom InputTypes
  /**
   * PeriksaLab findUnique
   */
  export type PeriksaLabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * Filter, which PeriksaLab to fetch.
     */
    where: PeriksaLabWhereUniqueInput
  }

  /**
   * PeriksaLab findUniqueOrThrow
   */
  export type PeriksaLabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * Filter, which PeriksaLab to fetch.
     */
    where: PeriksaLabWhereUniqueInput
  }

  /**
   * PeriksaLab findFirst
   */
  export type PeriksaLabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * Filter, which PeriksaLab to fetch.
     */
    where?: PeriksaLabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriksaLabs to fetch.
     */
    orderBy?: PeriksaLabOrderByWithRelationInput | PeriksaLabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeriksaLabs.
     */
    cursor?: PeriksaLabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriksaLabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriksaLabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriksaLabs.
     */
    distinct?: PeriksaLabScalarFieldEnum | PeriksaLabScalarFieldEnum[]
  }

  /**
   * PeriksaLab findFirstOrThrow
   */
  export type PeriksaLabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * Filter, which PeriksaLab to fetch.
     */
    where?: PeriksaLabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriksaLabs to fetch.
     */
    orderBy?: PeriksaLabOrderByWithRelationInput | PeriksaLabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeriksaLabs.
     */
    cursor?: PeriksaLabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriksaLabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriksaLabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriksaLabs.
     */
    distinct?: PeriksaLabScalarFieldEnum | PeriksaLabScalarFieldEnum[]
  }

  /**
   * PeriksaLab findMany
   */
  export type PeriksaLabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * Filter, which PeriksaLabs to fetch.
     */
    where?: PeriksaLabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriksaLabs to fetch.
     */
    orderBy?: PeriksaLabOrderByWithRelationInput | PeriksaLabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeriksaLabs.
     */
    cursor?: PeriksaLabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriksaLabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriksaLabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriksaLabs.
     */
    distinct?: PeriksaLabScalarFieldEnum | PeriksaLabScalarFieldEnum[]
  }

  /**
   * PeriksaLab create
   */
  export type PeriksaLabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * The data needed to create a PeriksaLab.
     */
    data: XOR<PeriksaLabCreateInput, PeriksaLabUncheckedCreateInput>
  }

  /**
   * PeriksaLab createMany
   */
  export type PeriksaLabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeriksaLabs.
     */
    data: PeriksaLabCreateManyInput | PeriksaLabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeriksaLab update
   */
  export type PeriksaLabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * The data needed to update a PeriksaLab.
     */
    data: XOR<PeriksaLabUpdateInput, PeriksaLabUncheckedUpdateInput>
    /**
     * Choose, which PeriksaLab to update.
     */
    where: PeriksaLabWhereUniqueInput
  }

  /**
   * PeriksaLab updateMany
   */
  export type PeriksaLabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeriksaLabs.
     */
    data: XOR<PeriksaLabUpdateManyMutationInput, PeriksaLabUncheckedUpdateManyInput>
    /**
     * Filter which PeriksaLabs to update
     */
    where?: PeriksaLabWhereInput
    /**
     * Limit how many PeriksaLabs to update.
     */
    limit?: number
  }

  /**
   * PeriksaLab upsert
   */
  export type PeriksaLabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * The filter to search for the PeriksaLab to update in case it exists.
     */
    where: PeriksaLabWhereUniqueInput
    /**
     * In case the PeriksaLab found by the `where` argument doesn't exist, create a new PeriksaLab with this data.
     */
    create: XOR<PeriksaLabCreateInput, PeriksaLabUncheckedCreateInput>
    /**
     * In case the PeriksaLab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriksaLabUpdateInput, PeriksaLabUncheckedUpdateInput>
  }

  /**
   * PeriksaLab delete
   */
  export type PeriksaLabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
    /**
     * Filter which PeriksaLab to delete.
     */
    where: PeriksaLabWhereUniqueInput
  }

  /**
   * PeriksaLab deleteMany
   */
  export type PeriksaLabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeriksaLabs to delete
     */
    where?: PeriksaLabWhereInput
    /**
     * Limit how many PeriksaLabs to delete.
     */
    limit?: number
  }

  /**
   * PeriksaLab without action
   */
  export type PeriksaLabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriksaLab
     */
    select?: PeriksaLabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriksaLab
     */
    omit?: PeriksaLabOmit<ExtArgs> | null
  }


  /**
   * Model Petugas
   */

  export type AggregatePetugas = {
    _count: PetugasCountAggregateOutputType | null
    _min: PetugasMinAggregateOutputType | null
    _max: PetugasMaxAggregateOutputType | null
  }

  export type PetugasMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    jk: $Enums.JenisKelamin | null
    tmpLahir: string | null
    tglLahir: Date | null
    golDarah: $Enums.GolDarah | null
    agama: string | null
    sttsNikah: $Enums.StatusNikah | null
    alamat: string | null
    kdJbtn: string | null
    noTelp: string | null
    email: string | null
    status: $Enums.StatusPetugas | null
  }

  export type PetugasMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    jk: $Enums.JenisKelamin | null
    tmpLahir: string | null
    tglLahir: Date | null
    golDarah: $Enums.GolDarah | null
    agama: string | null
    sttsNikah: $Enums.StatusNikah | null
    alamat: string | null
    kdJbtn: string | null
    noTelp: string | null
    email: string | null
    status: $Enums.StatusPetugas | null
  }

  export type PetugasCountAggregateOutputType = {
    nip: number
    nama: number
    jk: number
    tmpLahir: number
    tglLahir: number
    golDarah: number
    agama: number
    sttsNikah: number
    alamat: number
    kdJbtn: number
    noTelp: number
    email: number
    status: number
    _all: number
  }


  export type PetugasMinAggregateInputType = {
    nip?: true
    nama?: true
    jk?: true
    tmpLahir?: true
    tglLahir?: true
    golDarah?: true
    agama?: true
    sttsNikah?: true
    alamat?: true
    kdJbtn?: true
    noTelp?: true
    email?: true
    status?: true
  }

  export type PetugasMaxAggregateInputType = {
    nip?: true
    nama?: true
    jk?: true
    tmpLahir?: true
    tglLahir?: true
    golDarah?: true
    agama?: true
    sttsNikah?: true
    alamat?: true
    kdJbtn?: true
    noTelp?: true
    email?: true
    status?: true
  }

  export type PetugasCountAggregateInputType = {
    nip?: true
    nama?: true
    jk?: true
    tmpLahir?: true
    tglLahir?: true
    golDarah?: true
    agama?: true
    sttsNikah?: true
    alamat?: true
    kdJbtn?: true
    noTelp?: true
    email?: true
    status?: true
    _all?: true
  }

  export type PetugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Petugas to aggregate.
     */
    where?: PetugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petugases to fetch.
     */
    orderBy?: PetugasOrderByWithRelationInput | PetugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Petugases
    **/
    _count?: true | PetugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetugasMaxAggregateInputType
  }

  export type GetPetugasAggregateType<T extends PetugasAggregateArgs> = {
        [P in keyof T & keyof AggregatePetugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetugas[P]>
      : GetScalarType<T[P], AggregatePetugas[P]>
  }




  export type PetugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetugasWhereInput
    orderBy?: PetugasOrderByWithAggregationInput | PetugasOrderByWithAggregationInput[]
    by: PetugasScalarFieldEnum[] | PetugasScalarFieldEnum
    having?: PetugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetugasCountAggregateInputType | true
    _min?: PetugasMinAggregateInputType
    _max?: PetugasMaxAggregateInputType
  }

  export type PetugasGroupByOutputType = {
    nip: string
    nama: string
    jk: $Enums.JenisKelamin
    tmpLahir: string | null
    tglLahir: Date | null
    golDarah: $Enums.GolDarah | null
    agama: string | null
    sttsNikah: $Enums.StatusNikah | null
    alamat: string | null
    kdJbtn: string | null
    noTelp: string | null
    email: string | null
    status: $Enums.StatusPetugas | null
    _count: PetugasCountAggregateOutputType | null
    _min: PetugasMinAggregateOutputType | null
    _max: PetugasMaxAggregateOutputType | null
  }

  type GetPetugasGroupByPayload<T extends PetugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetugasGroupByOutputType[P]>
            : GetScalarType<T[P], PetugasGroupByOutputType[P]>
        }
      >
    >


  export type PetugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    jk?: boolean
    tmpLahir?: boolean
    tglLahir?: boolean
    golDarah?: boolean
    agama?: boolean
    sttsNikah?: boolean
    alamat?: boolean
    kdJbtn?: boolean
    noTelp?: boolean
    email?: boolean
    status?: boolean
  }, ExtArgs["result"]["petugas"]>



  export type PetugasSelectScalar = {
    nip?: boolean
    nama?: boolean
    jk?: boolean
    tmpLahir?: boolean
    tglLahir?: boolean
    golDarah?: boolean
    agama?: boolean
    sttsNikah?: boolean
    alamat?: boolean
    kdJbtn?: boolean
    noTelp?: boolean
    email?: boolean
    status?: boolean
  }

  export type PetugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "jk" | "tmpLahir" | "tglLahir" | "golDarah" | "agama" | "sttsNikah" | "alamat" | "kdJbtn" | "noTelp" | "email" | "status", ExtArgs["result"]["petugas"]>

  export type $PetugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Petugas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      jk: $Enums.JenisKelamin
      tmpLahir: string | null
      tglLahir: Date | null
      golDarah: $Enums.GolDarah | null
      agama: string | null
      sttsNikah: $Enums.StatusNikah | null
      alamat: string | null
      kdJbtn: string | null
      noTelp: string | null
      email: string | null
      status: $Enums.StatusPetugas | null
    }, ExtArgs["result"]["petugas"]>
    composites: {}
  }

  type PetugasGetPayload<S extends boolean | null | undefined | PetugasDefaultArgs> = $Result.GetResult<Prisma.$PetugasPayload, S>

  type PetugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetugasCountAggregateInputType | true
    }

  export interface PetugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Petugas'], meta: { name: 'Petugas' } }
    /**
     * Find zero or one Petugas that matches the filter.
     * @param {PetugasFindUniqueArgs} args - Arguments to find a Petugas
     * @example
     * // Get one Petugas
     * const petugas = await prisma.petugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetugasFindUniqueArgs>(args: SelectSubset<T, PetugasFindUniqueArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Petugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetugasFindUniqueOrThrowArgs} args - Arguments to find a Petugas
     * @example
     * // Get one Petugas
     * const petugas = await prisma.petugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetugasFindUniqueOrThrowArgs>(args: SelectSubset<T, PetugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasFindFirstArgs} args - Arguments to find a Petugas
     * @example
     * // Get one Petugas
     * const petugas = await prisma.petugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetugasFindFirstArgs>(args?: SelectSubset<T, PetugasFindFirstArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasFindFirstOrThrowArgs} args - Arguments to find a Petugas
     * @example
     * // Get one Petugas
     * const petugas = await prisma.petugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetugasFindFirstOrThrowArgs>(args?: SelectSubset<T, PetugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Petugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Petugases
     * const petugases = await prisma.petugas.findMany()
     * 
     * // Get first 10 Petugases
     * const petugases = await prisma.petugas.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const petugasWithNipOnly = await prisma.petugas.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends PetugasFindManyArgs>(args?: SelectSubset<T, PetugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Petugas.
     * @param {PetugasCreateArgs} args - Arguments to create a Petugas.
     * @example
     * // Create one Petugas
     * const Petugas = await prisma.petugas.create({
     *   data: {
     *     // ... data to create a Petugas
     *   }
     * })
     * 
     */
    create<T extends PetugasCreateArgs>(args: SelectSubset<T, PetugasCreateArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Petugases.
     * @param {PetugasCreateManyArgs} args - Arguments to create many Petugases.
     * @example
     * // Create many Petugases
     * const petugas = await prisma.petugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetugasCreateManyArgs>(args?: SelectSubset<T, PetugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Petugas.
     * @param {PetugasDeleteArgs} args - Arguments to delete one Petugas.
     * @example
     * // Delete one Petugas
     * const Petugas = await prisma.petugas.delete({
     *   where: {
     *     // ... filter to delete one Petugas
     *   }
     * })
     * 
     */
    delete<T extends PetugasDeleteArgs>(args: SelectSubset<T, PetugasDeleteArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Petugas.
     * @param {PetugasUpdateArgs} args - Arguments to update one Petugas.
     * @example
     * // Update one Petugas
     * const petugas = await prisma.petugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetugasUpdateArgs>(args: SelectSubset<T, PetugasUpdateArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Petugases.
     * @param {PetugasDeleteManyArgs} args - Arguments to filter Petugases to delete.
     * @example
     * // Delete a few Petugases
     * const { count } = await prisma.petugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetugasDeleteManyArgs>(args?: SelectSubset<T, PetugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Petugases
     * const petugas = await prisma.petugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetugasUpdateManyArgs>(args: SelectSubset<T, PetugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Petugas.
     * @param {PetugasUpsertArgs} args - Arguments to update or create a Petugas.
     * @example
     * // Update or create a Petugas
     * const petugas = await prisma.petugas.upsert({
     *   create: {
     *     // ... data to create a Petugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Petugas we want to update
     *   }
     * })
     */
    upsert<T extends PetugasUpsertArgs>(args: SelectSubset<T, PetugasUpsertArgs<ExtArgs>>): Prisma__PetugasClient<$Result.GetResult<Prisma.$PetugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Petugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasCountArgs} args - Arguments to filter Petugases to count.
     * @example
     * // Count the number of Petugases
     * const count = await prisma.petugas.count({
     *   where: {
     *     // ... the filter for the Petugases we want to count
     *   }
     * })
    **/
    count<T extends PetugasCountArgs>(
      args?: Subset<T, PetugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Petugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetugasAggregateArgs>(args: Subset<T, PetugasAggregateArgs>): Prisma.PrismaPromise<GetPetugasAggregateType<T>>

    /**
     * Group by Petugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetugasGroupByArgs['orderBy'] }
        : { orderBy?: PetugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Petugas model
   */
  readonly fields: PetugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Petugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Petugas model
   */
  interface PetugasFieldRefs {
    readonly nip: FieldRef<"Petugas", 'String'>
    readonly nama: FieldRef<"Petugas", 'String'>
    readonly jk: FieldRef<"Petugas", 'JenisKelamin'>
    readonly tmpLahir: FieldRef<"Petugas", 'String'>
    readonly tglLahir: FieldRef<"Petugas", 'DateTime'>
    readonly golDarah: FieldRef<"Petugas", 'GolDarah'>
    readonly agama: FieldRef<"Petugas", 'String'>
    readonly sttsNikah: FieldRef<"Petugas", 'StatusNikah'>
    readonly alamat: FieldRef<"Petugas", 'String'>
    readonly kdJbtn: FieldRef<"Petugas", 'String'>
    readonly noTelp: FieldRef<"Petugas", 'String'>
    readonly email: FieldRef<"Petugas", 'String'>
    readonly status: FieldRef<"Petugas", 'StatusPetugas'>
  }
    

  // Custom InputTypes
  /**
   * Petugas findUnique
   */
  export type PetugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * Filter, which Petugas to fetch.
     */
    where: PetugasWhereUniqueInput
  }

  /**
   * Petugas findUniqueOrThrow
   */
  export type PetugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * Filter, which Petugas to fetch.
     */
    where: PetugasWhereUniqueInput
  }

  /**
   * Petugas findFirst
   */
  export type PetugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * Filter, which Petugas to fetch.
     */
    where?: PetugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petugases to fetch.
     */
    orderBy?: PetugasOrderByWithRelationInput | PetugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Petugases.
     */
    cursor?: PetugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petugases.
     */
    distinct?: PetugasScalarFieldEnum | PetugasScalarFieldEnum[]
  }

  /**
   * Petugas findFirstOrThrow
   */
  export type PetugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * Filter, which Petugas to fetch.
     */
    where?: PetugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petugases to fetch.
     */
    orderBy?: PetugasOrderByWithRelationInput | PetugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Petugases.
     */
    cursor?: PetugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petugases.
     */
    distinct?: PetugasScalarFieldEnum | PetugasScalarFieldEnum[]
  }

  /**
   * Petugas findMany
   */
  export type PetugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * Filter, which Petugases to fetch.
     */
    where?: PetugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petugases to fetch.
     */
    orderBy?: PetugasOrderByWithRelationInput | PetugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Petugases.
     */
    cursor?: PetugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petugases.
     */
    distinct?: PetugasScalarFieldEnum | PetugasScalarFieldEnum[]
  }

  /**
   * Petugas create
   */
  export type PetugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * The data needed to create a Petugas.
     */
    data: XOR<PetugasCreateInput, PetugasUncheckedCreateInput>
  }

  /**
   * Petugas createMany
   */
  export type PetugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Petugases.
     */
    data: PetugasCreateManyInput | PetugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Petugas update
   */
  export type PetugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * The data needed to update a Petugas.
     */
    data: XOR<PetugasUpdateInput, PetugasUncheckedUpdateInput>
    /**
     * Choose, which Petugas to update.
     */
    where: PetugasWhereUniqueInput
  }

  /**
   * Petugas updateMany
   */
  export type PetugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Petugases.
     */
    data: XOR<PetugasUpdateManyMutationInput, PetugasUncheckedUpdateManyInput>
    /**
     * Filter which Petugases to update
     */
    where?: PetugasWhereInput
    /**
     * Limit how many Petugases to update.
     */
    limit?: number
  }

  /**
   * Petugas upsert
   */
  export type PetugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * The filter to search for the Petugas to update in case it exists.
     */
    where: PetugasWhereUniqueInput
    /**
     * In case the Petugas found by the `where` argument doesn't exist, create a new Petugas with this data.
     */
    create: XOR<PetugasCreateInput, PetugasUncheckedCreateInput>
    /**
     * In case the Petugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetugasUpdateInput, PetugasUncheckedUpdateInput>
  }

  /**
   * Petugas delete
   */
  export type PetugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
    /**
     * Filter which Petugas to delete.
     */
    where: PetugasWhereUniqueInput
  }

  /**
   * Petugas deleteMany
   */
  export type PetugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Petugases to delete
     */
    where?: PetugasWhereInput
    /**
     * Limit how many Petugases to delete.
     */
    limit?: number
  }

  /**
   * Petugas without action
   */
  export type PetugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petugas
     */
    select?: PetugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petugas
     */
    omit?: PetugasOmit<ExtArgs> | null
  }


  /**
   * Model RegPeriksa
   */

  export type AggregateRegPeriksa = {
    _count: RegPeriksaCountAggregateOutputType | null
    _avg: RegPeriksaAvgAggregateOutputType | null
    _sum: RegPeriksaSumAggregateOutputType | null
    _min: RegPeriksaMinAggregateOutputType | null
    _max: RegPeriksaMaxAggregateOutputType | null
  }

  export type RegPeriksaAvgAggregateOutputType = {
    biaya_reg: number | null
    umurdaftar: number | null
  }

  export type RegPeriksaSumAggregateOutputType = {
    biaya_reg: number | null
    umurdaftar: number | null
  }

  export type RegPeriksaMinAggregateOutputType = {
    no_reg: string | null
    no_rawat: string | null
    tgl_registrasi: Date | null
    jam_reg: Date | null
    kd_dokter: string | null
    no_rkm_medis: string | null
    kd_poli: string | null
    p_jawab: string | null
    almt_pj: string | null
    hubunganpj: string | null
    biaya_reg: number | null
    stts: $Enums.StatusRegPeriksa | null
    stts_daftar: $Enums.StatusDaftar | null
    status_lanjut: $Enums.StatusLanjut | null
    kd_pj: string | null
    umurdaftar: number | null
    sttsumur: $Enums.StatusUmur | null
    status_bayar: $Enums.StatusBayar | null
    status_poli: $Enums.StatusPoli | null
  }

  export type RegPeriksaMaxAggregateOutputType = {
    no_reg: string | null
    no_rawat: string | null
    tgl_registrasi: Date | null
    jam_reg: Date | null
    kd_dokter: string | null
    no_rkm_medis: string | null
    kd_poli: string | null
    p_jawab: string | null
    almt_pj: string | null
    hubunganpj: string | null
    biaya_reg: number | null
    stts: $Enums.StatusRegPeriksa | null
    stts_daftar: $Enums.StatusDaftar | null
    status_lanjut: $Enums.StatusLanjut | null
    kd_pj: string | null
    umurdaftar: number | null
    sttsumur: $Enums.StatusUmur | null
    status_bayar: $Enums.StatusBayar | null
    status_poli: $Enums.StatusPoli | null
  }

  export type RegPeriksaCountAggregateOutputType = {
    no_reg: number
    no_rawat: number
    tgl_registrasi: number
    jam_reg: number
    kd_dokter: number
    no_rkm_medis: number
    kd_poli: number
    p_jawab: number
    almt_pj: number
    hubunganpj: number
    biaya_reg: number
    stts: number
    stts_daftar: number
    status_lanjut: number
    kd_pj: number
    umurdaftar: number
    sttsumur: number
    status_bayar: number
    status_poli: number
    _all: number
  }


  export type RegPeriksaAvgAggregateInputType = {
    biaya_reg?: true
    umurdaftar?: true
  }

  export type RegPeriksaSumAggregateInputType = {
    biaya_reg?: true
    umurdaftar?: true
  }

  export type RegPeriksaMinAggregateInputType = {
    no_reg?: true
    no_rawat?: true
    tgl_registrasi?: true
    jam_reg?: true
    kd_dokter?: true
    no_rkm_medis?: true
    kd_poli?: true
    p_jawab?: true
    almt_pj?: true
    hubunganpj?: true
    biaya_reg?: true
    stts?: true
    stts_daftar?: true
    status_lanjut?: true
    kd_pj?: true
    umurdaftar?: true
    sttsumur?: true
    status_bayar?: true
    status_poli?: true
  }

  export type RegPeriksaMaxAggregateInputType = {
    no_reg?: true
    no_rawat?: true
    tgl_registrasi?: true
    jam_reg?: true
    kd_dokter?: true
    no_rkm_medis?: true
    kd_poli?: true
    p_jawab?: true
    almt_pj?: true
    hubunganpj?: true
    biaya_reg?: true
    stts?: true
    stts_daftar?: true
    status_lanjut?: true
    kd_pj?: true
    umurdaftar?: true
    sttsumur?: true
    status_bayar?: true
    status_poli?: true
  }

  export type RegPeriksaCountAggregateInputType = {
    no_reg?: true
    no_rawat?: true
    tgl_registrasi?: true
    jam_reg?: true
    kd_dokter?: true
    no_rkm_medis?: true
    kd_poli?: true
    p_jawab?: true
    almt_pj?: true
    hubunganpj?: true
    biaya_reg?: true
    stts?: true
    stts_daftar?: true
    status_lanjut?: true
    kd_pj?: true
    umurdaftar?: true
    sttsumur?: true
    status_bayar?: true
    status_poli?: true
    _all?: true
  }

  export type RegPeriksaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegPeriksa to aggregate.
     */
    where?: RegPeriksaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegPeriksas to fetch.
     */
    orderBy?: RegPeriksaOrderByWithRelationInput | RegPeriksaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegPeriksaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegPeriksas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegPeriksas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegPeriksas
    **/
    _count?: true | RegPeriksaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegPeriksaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegPeriksaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegPeriksaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegPeriksaMaxAggregateInputType
  }

  export type GetRegPeriksaAggregateType<T extends RegPeriksaAggregateArgs> = {
        [P in keyof T & keyof AggregateRegPeriksa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegPeriksa[P]>
      : GetScalarType<T[P], AggregateRegPeriksa[P]>
  }




  export type RegPeriksaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegPeriksaWhereInput
    orderBy?: RegPeriksaOrderByWithAggregationInput | RegPeriksaOrderByWithAggregationInput[]
    by: RegPeriksaScalarFieldEnum[] | RegPeriksaScalarFieldEnum
    having?: RegPeriksaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegPeriksaCountAggregateInputType | true
    _avg?: RegPeriksaAvgAggregateInputType
    _sum?: RegPeriksaSumAggregateInputType
    _min?: RegPeriksaMinAggregateInputType
    _max?: RegPeriksaMaxAggregateInputType
  }

  export type RegPeriksaGroupByOutputType = {
    no_reg: string
    no_rawat: string
    tgl_registrasi: Date
    jam_reg: Date
    kd_dokter: string
    no_rkm_medis: string
    kd_poli: string
    p_jawab: string
    almt_pj: string
    hubunganpj: string
    biaya_reg: number
    stts: $Enums.StatusRegPeriksa
    stts_daftar: $Enums.StatusDaftar
    status_lanjut: $Enums.StatusLanjut
    kd_pj: string
    umurdaftar: number
    sttsumur: $Enums.StatusUmur
    status_bayar: $Enums.StatusBayar
    status_poli: $Enums.StatusPoli
    _count: RegPeriksaCountAggregateOutputType | null
    _avg: RegPeriksaAvgAggregateOutputType | null
    _sum: RegPeriksaSumAggregateOutputType | null
    _min: RegPeriksaMinAggregateOutputType | null
    _max: RegPeriksaMaxAggregateOutputType | null
  }

  type GetRegPeriksaGroupByPayload<T extends RegPeriksaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegPeriksaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegPeriksaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegPeriksaGroupByOutputType[P]>
            : GetScalarType<T[P], RegPeriksaGroupByOutputType[P]>
        }
      >
    >


  export type RegPeriksaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_reg?: boolean
    no_rawat?: boolean
    tgl_registrasi?: boolean
    jam_reg?: boolean
    kd_dokter?: boolean
    no_rkm_medis?: boolean
    kd_poli?: boolean
    p_jawab?: boolean
    almt_pj?: boolean
    hubunganpj?: boolean
    biaya_reg?: boolean
    stts?: boolean
    stts_daftar?: boolean
    status_lanjut?: boolean
    kd_pj?: boolean
    umurdaftar?: boolean
    sttsumur?: boolean
    status_bayar?: boolean
    status_poli?: boolean
    detailNotaJalan?: boolean | RegPeriksa$detailNotaJalanArgs<ExtArgs>
    _count?: boolean | RegPeriksaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regPeriksa"]>



  export type RegPeriksaSelectScalar = {
    no_reg?: boolean
    no_rawat?: boolean
    tgl_registrasi?: boolean
    jam_reg?: boolean
    kd_dokter?: boolean
    no_rkm_medis?: boolean
    kd_poli?: boolean
    p_jawab?: boolean
    almt_pj?: boolean
    hubunganpj?: boolean
    biaya_reg?: boolean
    stts?: boolean
    stts_daftar?: boolean
    status_lanjut?: boolean
    kd_pj?: boolean
    umurdaftar?: boolean
    sttsumur?: boolean
    status_bayar?: boolean
    status_poli?: boolean
  }

  export type RegPeriksaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"no_reg" | "no_rawat" | "tgl_registrasi" | "jam_reg" | "kd_dokter" | "no_rkm_medis" | "kd_poli" | "p_jawab" | "almt_pj" | "hubunganpj" | "biaya_reg" | "stts" | "stts_daftar" | "status_lanjut" | "kd_pj" | "umurdaftar" | "sttsumur" | "status_bayar" | "status_poli", ExtArgs["result"]["regPeriksa"]>
  export type RegPeriksaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailNotaJalan?: boolean | RegPeriksa$detailNotaJalanArgs<ExtArgs>
    _count?: boolean | RegPeriksaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegPeriksaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegPeriksa"
    objects: {
      detailNotaJalan: Prisma.$DetailNotaJalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no_reg: string
      no_rawat: string
      tgl_registrasi: Date
      jam_reg: Date
      kd_dokter: string
      no_rkm_medis: string
      kd_poli: string
      p_jawab: string
      almt_pj: string
      hubunganpj: string
      biaya_reg: number
      stts: $Enums.StatusRegPeriksa
      stts_daftar: $Enums.StatusDaftar
      status_lanjut: $Enums.StatusLanjut
      kd_pj: string
      umurdaftar: number
      sttsumur: $Enums.StatusUmur
      status_bayar: $Enums.StatusBayar
      status_poli: $Enums.StatusPoli
    }, ExtArgs["result"]["regPeriksa"]>
    composites: {}
  }

  type RegPeriksaGetPayload<S extends boolean | null | undefined | RegPeriksaDefaultArgs> = $Result.GetResult<Prisma.$RegPeriksaPayload, S>

  type RegPeriksaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegPeriksaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegPeriksaCountAggregateInputType | true
    }

  export interface RegPeriksaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegPeriksa'], meta: { name: 'RegPeriksa' } }
    /**
     * Find zero or one RegPeriksa that matches the filter.
     * @param {RegPeriksaFindUniqueArgs} args - Arguments to find a RegPeriksa
     * @example
     * // Get one RegPeriksa
     * const regPeriksa = await prisma.regPeriksa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegPeriksaFindUniqueArgs>(args: SelectSubset<T, RegPeriksaFindUniqueArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegPeriksa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegPeriksaFindUniqueOrThrowArgs} args - Arguments to find a RegPeriksa
     * @example
     * // Get one RegPeriksa
     * const regPeriksa = await prisma.regPeriksa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegPeriksaFindUniqueOrThrowArgs>(args: SelectSubset<T, RegPeriksaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegPeriksa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaFindFirstArgs} args - Arguments to find a RegPeriksa
     * @example
     * // Get one RegPeriksa
     * const regPeriksa = await prisma.regPeriksa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegPeriksaFindFirstArgs>(args?: SelectSubset<T, RegPeriksaFindFirstArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegPeriksa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaFindFirstOrThrowArgs} args - Arguments to find a RegPeriksa
     * @example
     * // Get one RegPeriksa
     * const regPeriksa = await prisma.regPeriksa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegPeriksaFindFirstOrThrowArgs>(args?: SelectSubset<T, RegPeriksaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegPeriksas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegPeriksas
     * const regPeriksas = await prisma.regPeriksa.findMany()
     * 
     * // Get first 10 RegPeriksas
     * const regPeriksas = await prisma.regPeriksa.findMany({ take: 10 })
     * 
     * // Only select the `no_reg`
     * const regPeriksaWithNo_regOnly = await prisma.regPeriksa.findMany({ select: { no_reg: true } })
     * 
     */
    findMany<T extends RegPeriksaFindManyArgs>(args?: SelectSubset<T, RegPeriksaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegPeriksa.
     * @param {RegPeriksaCreateArgs} args - Arguments to create a RegPeriksa.
     * @example
     * // Create one RegPeriksa
     * const RegPeriksa = await prisma.regPeriksa.create({
     *   data: {
     *     // ... data to create a RegPeriksa
     *   }
     * })
     * 
     */
    create<T extends RegPeriksaCreateArgs>(args: SelectSubset<T, RegPeriksaCreateArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegPeriksas.
     * @param {RegPeriksaCreateManyArgs} args - Arguments to create many RegPeriksas.
     * @example
     * // Create many RegPeriksas
     * const regPeriksa = await prisma.regPeriksa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegPeriksaCreateManyArgs>(args?: SelectSubset<T, RegPeriksaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegPeriksa.
     * @param {RegPeriksaDeleteArgs} args - Arguments to delete one RegPeriksa.
     * @example
     * // Delete one RegPeriksa
     * const RegPeriksa = await prisma.regPeriksa.delete({
     *   where: {
     *     // ... filter to delete one RegPeriksa
     *   }
     * })
     * 
     */
    delete<T extends RegPeriksaDeleteArgs>(args: SelectSubset<T, RegPeriksaDeleteArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegPeriksa.
     * @param {RegPeriksaUpdateArgs} args - Arguments to update one RegPeriksa.
     * @example
     * // Update one RegPeriksa
     * const regPeriksa = await prisma.regPeriksa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegPeriksaUpdateArgs>(args: SelectSubset<T, RegPeriksaUpdateArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegPeriksas.
     * @param {RegPeriksaDeleteManyArgs} args - Arguments to filter RegPeriksas to delete.
     * @example
     * // Delete a few RegPeriksas
     * const { count } = await prisma.regPeriksa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegPeriksaDeleteManyArgs>(args?: SelectSubset<T, RegPeriksaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegPeriksas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegPeriksas
     * const regPeriksa = await prisma.regPeriksa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegPeriksaUpdateManyArgs>(args: SelectSubset<T, RegPeriksaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegPeriksa.
     * @param {RegPeriksaUpsertArgs} args - Arguments to update or create a RegPeriksa.
     * @example
     * // Update or create a RegPeriksa
     * const regPeriksa = await prisma.regPeriksa.upsert({
     *   create: {
     *     // ... data to create a RegPeriksa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegPeriksa we want to update
     *   }
     * })
     */
    upsert<T extends RegPeriksaUpsertArgs>(args: SelectSubset<T, RegPeriksaUpsertArgs<ExtArgs>>): Prisma__RegPeriksaClient<$Result.GetResult<Prisma.$RegPeriksaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegPeriksas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaCountArgs} args - Arguments to filter RegPeriksas to count.
     * @example
     * // Count the number of RegPeriksas
     * const count = await prisma.regPeriksa.count({
     *   where: {
     *     // ... the filter for the RegPeriksas we want to count
     *   }
     * })
    **/
    count<T extends RegPeriksaCountArgs>(
      args?: Subset<T, RegPeriksaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegPeriksaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegPeriksa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegPeriksaAggregateArgs>(args: Subset<T, RegPeriksaAggregateArgs>): Prisma.PrismaPromise<GetRegPeriksaAggregateType<T>>

    /**
     * Group by RegPeriksa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegPeriksaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegPeriksaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegPeriksaGroupByArgs['orderBy'] }
        : { orderBy?: RegPeriksaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegPeriksaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegPeriksaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegPeriksa model
   */
  readonly fields: RegPeriksaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegPeriksa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegPeriksaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detailNotaJalan<T extends RegPeriksa$detailNotaJalanArgs<ExtArgs> = {}>(args?: Subset<T, RegPeriksa$detailNotaJalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailNotaJalanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegPeriksa model
   */
  interface RegPeriksaFieldRefs {
    readonly no_reg: FieldRef<"RegPeriksa", 'String'>
    readonly no_rawat: FieldRef<"RegPeriksa", 'String'>
    readonly tgl_registrasi: FieldRef<"RegPeriksa", 'DateTime'>
    readonly jam_reg: FieldRef<"RegPeriksa", 'DateTime'>
    readonly kd_dokter: FieldRef<"RegPeriksa", 'String'>
    readonly no_rkm_medis: FieldRef<"RegPeriksa", 'String'>
    readonly kd_poli: FieldRef<"RegPeriksa", 'String'>
    readonly p_jawab: FieldRef<"RegPeriksa", 'String'>
    readonly almt_pj: FieldRef<"RegPeriksa", 'String'>
    readonly hubunganpj: FieldRef<"RegPeriksa", 'String'>
    readonly biaya_reg: FieldRef<"RegPeriksa", 'Float'>
    readonly stts: FieldRef<"RegPeriksa", 'StatusRegPeriksa'>
    readonly stts_daftar: FieldRef<"RegPeriksa", 'StatusDaftar'>
    readonly status_lanjut: FieldRef<"RegPeriksa", 'StatusLanjut'>
    readonly kd_pj: FieldRef<"RegPeriksa", 'String'>
    readonly umurdaftar: FieldRef<"RegPeriksa", 'Int'>
    readonly sttsumur: FieldRef<"RegPeriksa", 'StatusUmur'>
    readonly status_bayar: FieldRef<"RegPeriksa", 'StatusBayar'>
    readonly status_poli: FieldRef<"RegPeriksa", 'StatusPoli'>
  }
    

  // Custom InputTypes
  /**
   * RegPeriksa findUnique
   */
  export type RegPeriksaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * Filter, which RegPeriksa to fetch.
     */
    where: RegPeriksaWhereUniqueInput
  }

  /**
   * RegPeriksa findUniqueOrThrow
   */
  export type RegPeriksaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * Filter, which RegPeriksa to fetch.
     */
    where: RegPeriksaWhereUniqueInput
  }

  /**
   * RegPeriksa findFirst
   */
  export type RegPeriksaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * Filter, which RegPeriksa to fetch.
     */
    where?: RegPeriksaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegPeriksas to fetch.
     */
    orderBy?: RegPeriksaOrderByWithRelationInput | RegPeriksaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegPeriksas.
     */
    cursor?: RegPeriksaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegPeriksas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegPeriksas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegPeriksas.
     */
    distinct?: RegPeriksaScalarFieldEnum | RegPeriksaScalarFieldEnum[]
  }

  /**
   * RegPeriksa findFirstOrThrow
   */
  export type RegPeriksaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * Filter, which RegPeriksa to fetch.
     */
    where?: RegPeriksaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegPeriksas to fetch.
     */
    orderBy?: RegPeriksaOrderByWithRelationInput | RegPeriksaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegPeriksas.
     */
    cursor?: RegPeriksaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegPeriksas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegPeriksas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegPeriksas.
     */
    distinct?: RegPeriksaScalarFieldEnum | RegPeriksaScalarFieldEnum[]
  }

  /**
   * RegPeriksa findMany
   */
  export type RegPeriksaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * Filter, which RegPeriksas to fetch.
     */
    where?: RegPeriksaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegPeriksas to fetch.
     */
    orderBy?: RegPeriksaOrderByWithRelationInput | RegPeriksaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegPeriksas.
     */
    cursor?: RegPeriksaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegPeriksas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegPeriksas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegPeriksas.
     */
    distinct?: RegPeriksaScalarFieldEnum | RegPeriksaScalarFieldEnum[]
  }

  /**
   * RegPeriksa create
   */
  export type RegPeriksaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * The data needed to create a RegPeriksa.
     */
    data: XOR<RegPeriksaCreateInput, RegPeriksaUncheckedCreateInput>
  }

  /**
   * RegPeriksa createMany
   */
  export type RegPeriksaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegPeriksas.
     */
    data: RegPeriksaCreateManyInput | RegPeriksaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegPeriksa update
   */
  export type RegPeriksaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * The data needed to update a RegPeriksa.
     */
    data: XOR<RegPeriksaUpdateInput, RegPeriksaUncheckedUpdateInput>
    /**
     * Choose, which RegPeriksa to update.
     */
    where: RegPeriksaWhereUniqueInput
  }

  /**
   * RegPeriksa updateMany
   */
  export type RegPeriksaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegPeriksas.
     */
    data: XOR<RegPeriksaUpdateManyMutationInput, RegPeriksaUncheckedUpdateManyInput>
    /**
     * Filter which RegPeriksas to update
     */
    where?: RegPeriksaWhereInput
    /**
     * Limit how many RegPeriksas to update.
     */
    limit?: number
  }

  /**
   * RegPeriksa upsert
   */
  export type RegPeriksaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * The filter to search for the RegPeriksa to update in case it exists.
     */
    where: RegPeriksaWhereUniqueInput
    /**
     * In case the RegPeriksa found by the `where` argument doesn't exist, create a new RegPeriksa with this data.
     */
    create: XOR<RegPeriksaCreateInput, RegPeriksaUncheckedCreateInput>
    /**
     * In case the RegPeriksa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegPeriksaUpdateInput, RegPeriksaUncheckedUpdateInput>
  }

  /**
   * RegPeriksa delete
   */
  export type RegPeriksaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
    /**
     * Filter which RegPeriksa to delete.
     */
    where: RegPeriksaWhereUniqueInput
  }

  /**
   * RegPeriksa deleteMany
   */
  export type RegPeriksaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegPeriksas to delete
     */
    where?: RegPeriksaWhereInput
    /**
     * Limit how many RegPeriksas to delete.
     */
    limit?: number
  }

  /**
   * RegPeriksa.detailNotaJalan
   */
  export type RegPeriksa$detailNotaJalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailNotaJalan
     */
    select?: DetailNotaJalanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailNotaJalan
     */
    omit?: DetailNotaJalanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailNotaJalanInclude<ExtArgs> | null
    where?: DetailNotaJalanWhereInput
    orderBy?: DetailNotaJalanOrderByWithRelationInput | DetailNotaJalanOrderByWithRelationInput[]
    cursor?: DetailNotaJalanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailNotaJalanScalarFieldEnum | DetailNotaJalanScalarFieldEnum[]
  }

  /**
   * RegPeriksa without action
   */
  export type RegPeriksaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegPeriksa
     */
    select?: RegPeriksaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegPeriksa
     */
    omit?: RegPeriksaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegPeriksaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DataTriaseIgdScalarFieldEnum: {
    no_rawat: 'no_rawat',
    tgl_kunjungan: 'tgl_kunjungan',
    cara_masuk: 'cara_masuk',
    alat_transportasi: 'alat_transportasi',
    alasan_kedatangan: 'alasan_kedatangan',
    keterangan_kedatangan: 'keterangan_kedatangan',
    kode_kasus: 'kode_kasus',
    tekanan_darah: 'tekanan_darah',
    nadi: 'nadi',
    pernapasan: 'pernapasan',
    suhu: 'suhu',
    saturasi_o2: 'saturasi_o2',
    nyeri: 'nyeri'
  };

  export type DataTriaseIgdScalarFieldEnum = (typeof DataTriaseIgdScalarFieldEnum)[keyof typeof DataTriaseIgdScalarFieldEnum]


  export const DetailNotaJalanScalarFieldEnum: {
    noRawat: 'noRawat',
    namaBayar: 'namaBayar',
    besarppn: 'besarppn',
    besarBayar: 'besarBayar'
  };

  export type DetailNotaJalanScalarFieldEnum = (typeof DetailNotaJalanScalarFieldEnum)[keyof typeof DetailNotaJalanScalarFieldEnum]


  export const KamarScalarFieldEnum: {
    kdKamar: 'kdKamar',
    kdBangsal: 'kdBangsal',
    tarifKamar: 'tarifKamar',
    status: 'status',
    kelas: 'kelas',
    statusData: 'statusData'
  };

  export type KamarScalarFieldEnum = (typeof KamarScalarFieldEnum)[keyof typeof KamarScalarFieldEnum]


  export const PeriksaLabScalarFieldEnum: {
    no_rawat: 'no_rawat',
    nip: 'nip',
    kd_jenis_prw: 'kd_jenis_prw',
    tgl_periksa: 'tgl_periksa',
    jam: 'jam',
    dokter_perujuk: 'dokter_perujuk',
    bagian_rs: 'bagian_rs',
    bhp: 'bhp',
    tarif_perujuk: 'tarif_perujuk',
    tarif_tindakan_dokter: 'tarif_tindakan_dokter',
    tarif_tindakan_petugas: 'tarif_tindakan_petugas',
    kso: 'kso',
    menejemen: 'menejemen',
    biaya: 'biaya',
    kd_dokter: 'kd_dokter',
    status: 'status',
    kategori: 'kategori'
  };

  export type PeriksaLabScalarFieldEnum = (typeof PeriksaLabScalarFieldEnum)[keyof typeof PeriksaLabScalarFieldEnum]


  export const PetugasScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    jk: 'jk',
    tmpLahir: 'tmpLahir',
    tglLahir: 'tglLahir',
    golDarah: 'golDarah',
    agama: 'agama',
    sttsNikah: 'sttsNikah',
    alamat: 'alamat',
    kdJbtn: 'kdJbtn',
    noTelp: 'noTelp',
    email: 'email',
    status: 'status'
  };

  export type PetugasScalarFieldEnum = (typeof PetugasScalarFieldEnum)[keyof typeof PetugasScalarFieldEnum]


  export const RegPeriksaScalarFieldEnum: {
    no_reg: 'no_reg',
    no_rawat: 'no_rawat',
    tgl_registrasi: 'tgl_registrasi',
    jam_reg: 'jam_reg',
    kd_dokter: 'kd_dokter',
    no_rkm_medis: 'no_rkm_medis',
    kd_poli: 'kd_poli',
    p_jawab: 'p_jawab',
    almt_pj: 'almt_pj',
    hubunganpj: 'hubunganpj',
    biaya_reg: 'biaya_reg',
    stts: 'stts',
    stts_daftar: 'stts_daftar',
    status_lanjut: 'status_lanjut',
    kd_pj: 'kd_pj',
    umurdaftar: 'umurdaftar',
    sttsumur: 'sttsumur',
    status_bayar: 'status_bayar',
    status_poli: 'status_poli'
  };

  export type RegPeriksaScalarFieldEnum = (typeof RegPeriksaScalarFieldEnum)[keyof typeof RegPeriksaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const DataTriaseIgdOrderByRelevanceFieldEnum: {
    no_rawat: 'no_rawat',
    keterangan_kedatangan: 'keterangan_kedatangan',
    kode_kasus: 'kode_kasus',
    tekanan_darah: 'tekanan_darah',
    nadi: 'nadi',
    pernapasan: 'pernapasan',
    suhu: 'suhu',
    saturasi_o2: 'saturasi_o2',
    nyeri: 'nyeri'
  };

  export type DataTriaseIgdOrderByRelevanceFieldEnum = (typeof DataTriaseIgdOrderByRelevanceFieldEnum)[keyof typeof DataTriaseIgdOrderByRelevanceFieldEnum]


  export const DetailNotaJalanOrderByRelevanceFieldEnum: {
    noRawat: 'noRawat',
    namaBayar: 'namaBayar'
  };

  export type DetailNotaJalanOrderByRelevanceFieldEnum = (typeof DetailNotaJalanOrderByRelevanceFieldEnum)[keyof typeof DetailNotaJalanOrderByRelevanceFieldEnum]


  export const KamarOrderByRelevanceFieldEnum: {
    kdKamar: 'kdKamar',
    kdBangsal: 'kdBangsal'
  };

  export type KamarOrderByRelevanceFieldEnum = (typeof KamarOrderByRelevanceFieldEnum)[keyof typeof KamarOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PeriksaLabOrderByRelevanceFieldEnum: {
    no_rawat: 'no_rawat',
    nip: 'nip',
    kd_jenis_prw: 'kd_jenis_prw',
    dokter_perujuk: 'dokter_perujuk',
    kd_dokter: 'kd_dokter'
  };

  export type PeriksaLabOrderByRelevanceFieldEnum = (typeof PeriksaLabOrderByRelevanceFieldEnum)[keyof typeof PeriksaLabOrderByRelevanceFieldEnum]


  export const PetugasOrderByRelevanceFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    tmpLahir: 'tmpLahir',
    agama: 'agama',
    alamat: 'alamat',
    kdJbtn: 'kdJbtn',
    noTelp: 'noTelp',
    email: 'email'
  };

  export type PetugasOrderByRelevanceFieldEnum = (typeof PetugasOrderByRelevanceFieldEnum)[keyof typeof PetugasOrderByRelevanceFieldEnum]


  export const RegPeriksaOrderByRelevanceFieldEnum: {
    no_reg: 'no_reg',
    no_rawat: 'no_rawat',
    kd_dokter: 'kd_dokter',
    no_rkm_medis: 'no_rkm_medis',
    kd_poli: 'kd_poli',
    p_jawab: 'p_jawab',
    almt_pj: 'almt_pj',
    hubunganpj: 'hubunganpj',
    kd_pj: 'kd_pj'
  };

  export type RegPeriksaOrderByRelevanceFieldEnum = (typeof RegPeriksaOrderByRelevanceFieldEnum)[keyof typeof RegPeriksaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'CaraMasuk'
   */
  export type EnumCaraMasukFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaraMasuk'>
    


  /**
   * Reference to a field of type 'AlatTransportasi'
   */
  export type EnumAlatTransportasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlatTransportasi'>
    


  /**
   * Reference to a field of type 'AlasanKedatangan'
   */
  export type EnumAlasanKedatanganFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlasanKedatangan'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'StatusKamar'
   */
  export type EnumStatusKamarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKamar'>
    


  /**
   * Reference to a field of type 'KelasKamar'
   */
  export type EnumKelasKamarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KelasKamar'>
    


  /**
   * Reference to a field of type 'StatusData'
   */
  export type EnumStatusDataFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusData'>
    


  /**
   * Reference to a field of type 'StatusPeriksaLab'
   */
  export type EnumStatusPeriksaLabFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPeriksaLab'>
    


  /**
   * Reference to a field of type 'KategoriPeriksaLab'
   */
  export type EnumKategoriPeriksaLabFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KategoriPeriksaLab'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'GolDarah'
   */
  export type EnumGolDarahFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GolDarah'>
    


  /**
   * Reference to a field of type 'StatusNikah'
   */
  export type EnumStatusNikahFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusNikah'>
    


  /**
   * Reference to a field of type 'StatusPetugas'
   */
  export type EnumStatusPetugasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPetugas'>
    


  /**
   * Reference to a field of type 'StatusRegPeriksa'
   */
  export type EnumStatusRegPeriksaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRegPeriksa'>
    


  /**
   * Reference to a field of type 'StatusDaftar'
   */
  export type EnumStatusDaftarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDaftar'>
    


  /**
   * Reference to a field of type 'StatusLanjut'
   */
  export type EnumStatusLanjutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusLanjut'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'StatusUmur'
   */
  export type EnumStatusUmurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUmur'>
    


  /**
   * Reference to a field of type 'StatusBayar'
   */
  export type EnumStatusBayarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBayar'>
    


  /**
   * Reference to a field of type 'StatusPoli'
   */
  export type EnumStatusPoliFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPoli'>
    
  /**
   * Deep Input Types
   */


  export type DataTriaseIgdWhereInput = {
    AND?: DataTriaseIgdWhereInput | DataTriaseIgdWhereInput[]
    OR?: DataTriaseIgdWhereInput[]
    NOT?: DataTriaseIgdWhereInput | DataTriaseIgdWhereInput[]
    no_rawat?: StringFilter<"DataTriaseIgd"> | string
    tgl_kunjungan?: DateTimeFilter<"DataTriaseIgd"> | Date | string
    cara_masuk?: EnumCaraMasukFilter<"DataTriaseIgd"> | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiFilter<"DataTriaseIgd"> | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganFilter<"DataTriaseIgd"> | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringFilter<"DataTriaseIgd"> | string
    kode_kasus?: StringFilter<"DataTriaseIgd"> | string
    tekanan_darah?: StringFilter<"DataTriaseIgd"> | string
    nadi?: StringFilter<"DataTriaseIgd"> | string
    pernapasan?: StringFilter<"DataTriaseIgd"> | string
    suhu?: StringFilter<"DataTriaseIgd"> | string
    saturasi_o2?: StringFilter<"DataTriaseIgd"> | string
    nyeri?: StringFilter<"DataTriaseIgd"> | string
  }

  export type DataTriaseIgdOrderByWithRelationInput = {
    no_rawat?: SortOrder
    tgl_kunjungan?: SortOrder
    cara_masuk?: SortOrder
    alat_transportasi?: SortOrder
    alasan_kedatangan?: SortOrder
    keterangan_kedatangan?: SortOrder
    kode_kasus?: SortOrder
    tekanan_darah?: SortOrder
    nadi?: SortOrder
    pernapasan?: SortOrder
    suhu?: SortOrder
    saturasi_o2?: SortOrder
    nyeri?: SortOrder
    _relevance?: DataTriaseIgdOrderByRelevanceInput
  }

  export type DataTriaseIgdWhereUniqueInput = Prisma.AtLeast<{
    no_rawat?: string
    AND?: DataTriaseIgdWhereInput | DataTriaseIgdWhereInput[]
    OR?: DataTriaseIgdWhereInput[]
    NOT?: DataTriaseIgdWhereInput | DataTriaseIgdWhereInput[]
    tgl_kunjungan?: DateTimeFilter<"DataTriaseIgd"> | Date | string
    cara_masuk?: EnumCaraMasukFilter<"DataTriaseIgd"> | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiFilter<"DataTriaseIgd"> | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganFilter<"DataTriaseIgd"> | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringFilter<"DataTriaseIgd"> | string
    kode_kasus?: StringFilter<"DataTriaseIgd"> | string
    tekanan_darah?: StringFilter<"DataTriaseIgd"> | string
    nadi?: StringFilter<"DataTriaseIgd"> | string
    pernapasan?: StringFilter<"DataTriaseIgd"> | string
    suhu?: StringFilter<"DataTriaseIgd"> | string
    saturasi_o2?: StringFilter<"DataTriaseIgd"> | string
    nyeri?: StringFilter<"DataTriaseIgd"> | string
  }, "no_rawat">

  export type DataTriaseIgdOrderByWithAggregationInput = {
    no_rawat?: SortOrder
    tgl_kunjungan?: SortOrder
    cara_masuk?: SortOrder
    alat_transportasi?: SortOrder
    alasan_kedatangan?: SortOrder
    keterangan_kedatangan?: SortOrder
    kode_kasus?: SortOrder
    tekanan_darah?: SortOrder
    nadi?: SortOrder
    pernapasan?: SortOrder
    suhu?: SortOrder
    saturasi_o2?: SortOrder
    nyeri?: SortOrder
    _count?: DataTriaseIgdCountOrderByAggregateInput
    _max?: DataTriaseIgdMaxOrderByAggregateInput
    _min?: DataTriaseIgdMinOrderByAggregateInput
  }

  export type DataTriaseIgdScalarWhereWithAggregatesInput = {
    AND?: DataTriaseIgdScalarWhereWithAggregatesInput | DataTriaseIgdScalarWhereWithAggregatesInput[]
    OR?: DataTriaseIgdScalarWhereWithAggregatesInput[]
    NOT?: DataTriaseIgdScalarWhereWithAggregatesInput | DataTriaseIgdScalarWhereWithAggregatesInput[]
    no_rawat?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    tgl_kunjungan?: DateTimeWithAggregatesFilter<"DataTriaseIgd"> | Date | string
    cara_masuk?: EnumCaraMasukWithAggregatesFilter<"DataTriaseIgd"> | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiWithAggregatesFilter<"DataTriaseIgd"> | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganWithAggregatesFilter<"DataTriaseIgd"> | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    kode_kasus?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    tekanan_darah?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    nadi?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    pernapasan?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    suhu?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    saturasi_o2?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
    nyeri?: StringWithAggregatesFilter<"DataTriaseIgd"> | string
  }

  export type DetailNotaJalanWhereInput = {
    AND?: DetailNotaJalanWhereInput | DetailNotaJalanWhereInput[]
    OR?: DetailNotaJalanWhereInput[]
    NOT?: DetailNotaJalanWhereInput | DetailNotaJalanWhereInput[]
    noRawat?: StringFilter<"DetailNotaJalan"> | string
    namaBayar?: StringFilter<"DetailNotaJalan"> | string
    besarppn?: FloatFilter<"DetailNotaJalan"> | number
    besarBayar?: FloatFilter<"DetailNotaJalan"> | number
    regPeriksa?: XOR<RegPeriksaScalarRelationFilter, RegPeriksaWhereInput>
  }

  export type DetailNotaJalanOrderByWithRelationInput = {
    noRawat?: SortOrder
    namaBayar?: SortOrder
    besarppn?: SortOrder
    besarBayar?: SortOrder
    regPeriksa?: RegPeriksaOrderByWithRelationInput
    _relevance?: DetailNotaJalanOrderByRelevanceInput
  }

  export type DetailNotaJalanWhereUniqueInput = Prisma.AtLeast<{
    noRawat_namaBayar?: DetailNotaJalanNoRawatNamaBayarCompoundUniqueInput
    AND?: DetailNotaJalanWhereInput | DetailNotaJalanWhereInput[]
    OR?: DetailNotaJalanWhereInput[]
    NOT?: DetailNotaJalanWhereInput | DetailNotaJalanWhereInput[]
    noRawat?: StringFilter<"DetailNotaJalan"> | string
    namaBayar?: StringFilter<"DetailNotaJalan"> | string
    besarppn?: FloatFilter<"DetailNotaJalan"> | number
    besarBayar?: FloatFilter<"DetailNotaJalan"> | number
    regPeriksa?: XOR<RegPeriksaScalarRelationFilter, RegPeriksaWhereInput>
  }, "noRawat_namaBayar">

  export type DetailNotaJalanOrderByWithAggregationInput = {
    noRawat?: SortOrder
    namaBayar?: SortOrder
    besarppn?: SortOrder
    besarBayar?: SortOrder
    _count?: DetailNotaJalanCountOrderByAggregateInput
    _avg?: DetailNotaJalanAvgOrderByAggregateInput
    _max?: DetailNotaJalanMaxOrderByAggregateInput
    _min?: DetailNotaJalanMinOrderByAggregateInput
    _sum?: DetailNotaJalanSumOrderByAggregateInput
  }

  export type DetailNotaJalanScalarWhereWithAggregatesInput = {
    AND?: DetailNotaJalanScalarWhereWithAggregatesInput | DetailNotaJalanScalarWhereWithAggregatesInput[]
    OR?: DetailNotaJalanScalarWhereWithAggregatesInput[]
    NOT?: DetailNotaJalanScalarWhereWithAggregatesInput | DetailNotaJalanScalarWhereWithAggregatesInput[]
    noRawat?: StringWithAggregatesFilter<"DetailNotaJalan"> | string
    namaBayar?: StringWithAggregatesFilter<"DetailNotaJalan"> | string
    besarppn?: FloatWithAggregatesFilter<"DetailNotaJalan"> | number
    besarBayar?: FloatWithAggregatesFilter<"DetailNotaJalan"> | number
  }

  export type KamarWhereInput = {
    AND?: KamarWhereInput | KamarWhereInput[]
    OR?: KamarWhereInput[]
    NOT?: KamarWhereInput | KamarWhereInput[]
    kdKamar?: StringFilter<"Kamar"> | string
    kdBangsal?: StringFilter<"Kamar"> | string
    tarifKamar?: FloatFilter<"Kamar"> | number
    status?: EnumStatusKamarFilter<"Kamar"> | $Enums.StatusKamar
    kelas?: EnumKelasKamarFilter<"Kamar"> | $Enums.KelasKamar
    statusData?: EnumStatusDataFilter<"Kamar"> | $Enums.StatusData
  }

  export type KamarOrderByWithRelationInput = {
    kdKamar?: SortOrder
    kdBangsal?: SortOrder
    tarifKamar?: SortOrder
    status?: SortOrder
    kelas?: SortOrder
    statusData?: SortOrder
    _relevance?: KamarOrderByRelevanceInput
  }

  export type KamarWhereUniqueInput = Prisma.AtLeast<{
    kdKamar?: string
    AND?: KamarWhereInput | KamarWhereInput[]
    OR?: KamarWhereInput[]
    NOT?: KamarWhereInput | KamarWhereInput[]
    kdBangsal?: StringFilter<"Kamar"> | string
    tarifKamar?: FloatFilter<"Kamar"> | number
    status?: EnumStatusKamarFilter<"Kamar"> | $Enums.StatusKamar
    kelas?: EnumKelasKamarFilter<"Kamar"> | $Enums.KelasKamar
    statusData?: EnumStatusDataFilter<"Kamar"> | $Enums.StatusData
  }, "kdKamar">

  export type KamarOrderByWithAggregationInput = {
    kdKamar?: SortOrder
    kdBangsal?: SortOrder
    tarifKamar?: SortOrder
    status?: SortOrder
    kelas?: SortOrder
    statusData?: SortOrder
    _count?: KamarCountOrderByAggregateInput
    _avg?: KamarAvgOrderByAggregateInput
    _max?: KamarMaxOrderByAggregateInput
    _min?: KamarMinOrderByAggregateInput
    _sum?: KamarSumOrderByAggregateInput
  }

  export type KamarScalarWhereWithAggregatesInput = {
    AND?: KamarScalarWhereWithAggregatesInput | KamarScalarWhereWithAggregatesInput[]
    OR?: KamarScalarWhereWithAggregatesInput[]
    NOT?: KamarScalarWhereWithAggregatesInput | KamarScalarWhereWithAggregatesInput[]
    kdKamar?: StringWithAggregatesFilter<"Kamar"> | string
    kdBangsal?: StringWithAggregatesFilter<"Kamar"> | string
    tarifKamar?: FloatWithAggregatesFilter<"Kamar"> | number
    status?: EnumStatusKamarWithAggregatesFilter<"Kamar"> | $Enums.StatusKamar
    kelas?: EnumKelasKamarWithAggregatesFilter<"Kamar"> | $Enums.KelasKamar
    statusData?: EnumStatusDataWithAggregatesFilter<"Kamar"> | $Enums.StatusData
  }

  export type PeriksaLabWhereInput = {
    AND?: PeriksaLabWhereInput | PeriksaLabWhereInput[]
    OR?: PeriksaLabWhereInput[]
    NOT?: PeriksaLabWhereInput | PeriksaLabWhereInput[]
    no_rawat?: StringFilter<"PeriksaLab"> | string
    nip?: StringNullableFilter<"PeriksaLab"> | string | null
    kd_jenis_prw?: StringFilter<"PeriksaLab"> | string
    tgl_periksa?: DateTimeFilter<"PeriksaLab"> | Date | string
    jam?: DateTimeFilter<"PeriksaLab"> | Date | string
    dokter_perujuk?: StringNullableFilter<"PeriksaLab"> | string | null
    bagian_rs?: FloatNullableFilter<"PeriksaLab"> | number | null
    bhp?: FloatNullableFilter<"PeriksaLab"> | number | null
    tarif_perujuk?: FloatNullableFilter<"PeriksaLab"> | number | null
    tarif_tindakan_dokter?: FloatNullableFilter<"PeriksaLab"> | number | null
    tarif_tindakan_petugas?: FloatNullableFilter<"PeriksaLab"> | number | null
    kso?: FloatNullableFilter<"PeriksaLab"> | number | null
    menejemen?: FloatNullableFilter<"PeriksaLab"> | number | null
    biaya?: FloatNullableFilter<"PeriksaLab"> | number | null
    kd_dokter?: StringNullableFilter<"PeriksaLab"> | string | null
    status?: EnumStatusPeriksaLabNullableFilter<"PeriksaLab"> | $Enums.StatusPeriksaLab | null
    kategori?: EnumKategoriPeriksaLabNullableFilter<"PeriksaLab"> | $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabOrderByWithRelationInput = {
    no_rawat?: SortOrder
    nip?: SortOrderInput | SortOrder
    kd_jenis_prw?: SortOrder
    tgl_periksa?: SortOrder
    jam?: SortOrder
    dokter_perujuk?: SortOrderInput | SortOrder
    bagian_rs?: SortOrderInput | SortOrder
    bhp?: SortOrderInput | SortOrder
    tarif_perujuk?: SortOrderInput | SortOrder
    tarif_tindakan_dokter?: SortOrderInput | SortOrder
    tarif_tindakan_petugas?: SortOrderInput | SortOrder
    kso?: SortOrderInput | SortOrder
    menejemen?: SortOrderInput | SortOrder
    biaya?: SortOrderInput | SortOrder
    kd_dokter?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    _relevance?: PeriksaLabOrderByRelevanceInput
  }

  export type PeriksaLabWhereUniqueInput = Prisma.AtLeast<{
    no_rawat_kd_jenis_prw_tgl_periksa_jam?: PeriksaLabNo_rawatKd_jenis_prwTgl_periksaJamCompoundUniqueInput
    AND?: PeriksaLabWhereInput | PeriksaLabWhereInput[]
    OR?: PeriksaLabWhereInput[]
    NOT?: PeriksaLabWhereInput | PeriksaLabWhereInput[]
    no_rawat?: StringFilter<"PeriksaLab"> | string
    nip?: StringNullableFilter<"PeriksaLab"> | string | null
    kd_jenis_prw?: StringFilter<"PeriksaLab"> | string
    tgl_periksa?: DateTimeFilter<"PeriksaLab"> | Date | string
    jam?: DateTimeFilter<"PeriksaLab"> | Date | string
    dokter_perujuk?: StringNullableFilter<"PeriksaLab"> | string | null
    bagian_rs?: FloatNullableFilter<"PeriksaLab"> | number | null
    bhp?: FloatNullableFilter<"PeriksaLab"> | number | null
    tarif_perujuk?: FloatNullableFilter<"PeriksaLab"> | number | null
    tarif_tindakan_dokter?: FloatNullableFilter<"PeriksaLab"> | number | null
    tarif_tindakan_petugas?: FloatNullableFilter<"PeriksaLab"> | number | null
    kso?: FloatNullableFilter<"PeriksaLab"> | number | null
    menejemen?: FloatNullableFilter<"PeriksaLab"> | number | null
    biaya?: FloatNullableFilter<"PeriksaLab"> | number | null
    kd_dokter?: StringNullableFilter<"PeriksaLab"> | string | null
    status?: EnumStatusPeriksaLabNullableFilter<"PeriksaLab"> | $Enums.StatusPeriksaLab | null
    kategori?: EnumKategoriPeriksaLabNullableFilter<"PeriksaLab"> | $Enums.KategoriPeriksaLab | null
  }, "no_rawat_kd_jenis_prw_tgl_periksa_jam">

  export type PeriksaLabOrderByWithAggregationInput = {
    no_rawat?: SortOrder
    nip?: SortOrderInput | SortOrder
    kd_jenis_prw?: SortOrder
    tgl_periksa?: SortOrder
    jam?: SortOrder
    dokter_perujuk?: SortOrderInput | SortOrder
    bagian_rs?: SortOrderInput | SortOrder
    bhp?: SortOrderInput | SortOrder
    tarif_perujuk?: SortOrderInput | SortOrder
    tarif_tindakan_dokter?: SortOrderInput | SortOrder
    tarif_tindakan_petugas?: SortOrderInput | SortOrder
    kso?: SortOrderInput | SortOrder
    menejemen?: SortOrderInput | SortOrder
    biaya?: SortOrderInput | SortOrder
    kd_dokter?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    _count?: PeriksaLabCountOrderByAggregateInput
    _avg?: PeriksaLabAvgOrderByAggregateInput
    _max?: PeriksaLabMaxOrderByAggregateInput
    _min?: PeriksaLabMinOrderByAggregateInput
    _sum?: PeriksaLabSumOrderByAggregateInput
  }

  export type PeriksaLabScalarWhereWithAggregatesInput = {
    AND?: PeriksaLabScalarWhereWithAggregatesInput | PeriksaLabScalarWhereWithAggregatesInput[]
    OR?: PeriksaLabScalarWhereWithAggregatesInput[]
    NOT?: PeriksaLabScalarWhereWithAggregatesInput | PeriksaLabScalarWhereWithAggregatesInput[]
    no_rawat?: StringWithAggregatesFilter<"PeriksaLab"> | string
    nip?: StringNullableWithAggregatesFilter<"PeriksaLab"> | string | null
    kd_jenis_prw?: StringWithAggregatesFilter<"PeriksaLab"> | string
    tgl_periksa?: DateTimeWithAggregatesFilter<"PeriksaLab"> | Date | string
    jam?: DateTimeWithAggregatesFilter<"PeriksaLab"> | Date | string
    dokter_perujuk?: StringNullableWithAggregatesFilter<"PeriksaLab"> | string | null
    bagian_rs?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    bhp?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    tarif_perujuk?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    tarif_tindakan_dokter?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    tarif_tindakan_petugas?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    kso?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    menejemen?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    biaya?: FloatNullableWithAggregatesFilter<"PeriksaLab"> | number | null
    kd_dokter?: StringNullableWithAggregatesFilter<"PeriksaLab"> | string | null
    status?: EnumStatusPeriksaLabNullableWithAggregatesFilter<"PeriksaLab"> | $Enums.StatusPeriksaLab | null
    kategori?: EnumKategoriPeriksaLabNullableWithAggregatesFilter<"PeriksaLab"> | $Enums.KategoriPeriksaLab | null
  }

  export type PetugasWhereInput = {
    AND?: PetugasWhereInput | PetugasWhereInput[]
    OR?: PetugasWhereInput[]
    NOT?: PetugasWhereInput | PetugasWhereInput[]
    nip?: StringFilter<"Petugas"> | string
    nama?: StringFilter<"Petugas"> | string
    jk?: EnumJenisKelaminFilter<"Petugas"> | $Enums.JenisKelamin
    tmpLahir?: StringNullableFilter<"Petugas"> | string | null
    tglLahir?: DateTimeNullableFilter<"Petugas"> | Date | string | null
    golDarah?: EnumGolDarahNullableFilter<"Petugas"> | $Enums.GolDarah | null
    agama?: StringNullableFilter<"Petugas"> | string | null
    sttsNikah?: EnumStatusNikahNullableFilter<"Petugas"> | $Enums.StatusNikah | null
    alamat?: StringNullableFilter<"Petugas"> | string | null
    kdJbtn?: StringNullableFilter<"Petugas"> | string | null
    noTelp?: StringNullableFilter<"Petugas"> | string | null
    email?: StringNullableFilter<"Petugas"> | string | null
    status?: EnumStatusPetugasNullableFilter<"Petugas"> | $Enums.StatusPetugas | null
  }

  export type PetugasOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    jk?: SortOrder
    tmpLahir?: SortOrderInput | SortOrder
    tglLahir?: SortOrderInput | SortOrder
    golDarah?: SortOrderInput | SortOrder
    agama?: SortOrderInput | SortOrder
    sttsNikah?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    kdJbtn?: SortOrderInput | SortOrder
    noTelp?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _relevance?: PetugasOrderByRelevanceInput
  }

  export type PetugasWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: PetugasWhereInput | PetugasWhereInput[]
    OR?: PetugasWhereInput[]
    NOT?: PetugasWhereInput | PetugasWhereInput[]
    nama?: StringFilter<"Petugas"> | string
    jk?: EnumJenisKelaminFilter<"Petugas"> | $Enums.JenisKelamin
    tmpLahir?: StringNullableFilter<"Petugas"> | string | null
    tglLahir?: DateTimeNullableFilter<"Petugas"> | Date | string | null
    golDarah?: EnumGolDarahNullableFilter<"Petugas"> | $Enums.GolDarah | null
    agama?: StringNullableFilter<"Petugas"> | string | null
    sttsNikah?: EnumStatusNikahNullableFilter<"Petugas"> | $Enums.StatusNikah | null
    alamat?: StringNullableFilter<"Petugas"> | string | null
    kdJbtn?: StringNullableFilter<"Petugas"> | string | null
    noTelp?: StringNullableFilter<"Petugas"> | string | null
    email?: StringNullableFilter<"Petugas"> | string | null
    status?: EnumStatusPetugasNullableFilter<"Petugas"> | $Enums.StatusPetugas | null
  }, "nip">

  export type PetugasOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    jk?: SortOrder
    tmpLahir?: SortOrderInput | SortOrder
    tglLahir?: SortOrderInput | SortOrder
    golDarah?: SortOrderInput | SortOrder
    agama?: SortOrderInput | SortOrder
    sttsNikah?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    kdJbtn?: SortOrderInput | SortOrder
    noTelp?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: PetugasCountOrderByAggregateInput
    _max?: PetugasMaxOrderByAggregateInput
    _min?: PetugasMinOrderByAggregateInput
  }

  export type PetugasScalarWhereWithAggregatesInput = {
    AND?: PetugasScalarWhereWithAggregatesInput | PetugasScalarWhereWithAggregatesInput[]
    OR?: PetugasScalarWhereWithAggregatesInput[]
    NOT?: PetugasScalarWhereWithAggregatesInput | PetugasScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"Petugas"> | string
    nama?: StringWithAggregatesFilter<"Petugas"> | string
    jk?: EnumJenisKelaminWithAggregatesFilter<"Petugas"> | $Enums.JenisKelamin
    tmpLahir?: StringNullableWithAggregatesFilter<"Petugas"> | string | null
    tglLahir?: DateTimeNullableWithAggregatesFilter<"Petugas"> | Date | string | null
    golDarah?: EnumGolDarahNullableWithAggregatesFilter<"Petugas"> | $Enums.GolDarah | null
    agama?: StringNullableWithAggregatesFilter<"Petugas"> | string | null
    sttsNikah?: EnumStatusNikahNullableWithAggregatesFilter<"Petugas"> | $Enums.StatusNikah | null
    alamat?: StringNullableWithAggregatesFilter<"Petugas"> | string | null
    kdJbtn?: StringNullableWithAggregatesFilter<"Petugas"> | string | null
    noTelp?: StringNullableWithAggregatesFilter<"Petugas"> | string | null
    email?: StringNullableWithAggregatesFilter<"Petugas"> | string | null
    status?: EnumStatusPetugasNullableWithAggregatesFilter<"Petugas"> | $Enums.StatusPetugas | null
  }

  export type RegPeriksaWhereInput = {
    AND?: RegPeriksaWhereInput | RegPeriksaWhereInput[]
    OR?: RegPeriksaWhereInput[]
    NOT?: RegPeriksaWhereInput | RegPeriksaWhereInput[]
    no_reg?: StringFilter<"RegPeriksa"> | string
    no_rawat?: StringFilter<"RegPeriksa"> | string
    tgl_registrasi?: DateTimeFilter<"RegPeriksa"> | Date | string
    jam_reg?: DateTimeFilter<"RegPeriksa"> | Date | string
    kd_dokter?: StringFilter<"RegPeriksa"> | string
    no_rkm_medis?: StringFilter<"RegPeriksa"> | string
    kd_poli?: StringFilter<"RegPeriksa"> | string
    p_jawab?: StringFilter<"RegPeriksa"> | string
    almt_pj?: StringFilter<"RegPeriksa"> | string
    hubunganpj?: StringFilter<"RegPeriksa"> | string
    biaya_reg?: FloatFilter<"RegPeriksa"> | number
    stts?: EnumStatusRegPeriksaFilter<"RegPeriksa"> | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFilter<"RegPeriksa"> | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFilter<"RegPeriksa"> | $Enums.StatusLanjut
    kd_pj?: StringFilter<"RegPeriksa"> | string
    umurdaftar?: IntFilter<"RegPeriksa"> | number
    sttsumur?: EnumStatusUmurFilter<"RegPeriksa"> | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFilter<"RegPeriksa"> | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFilter<"RegPeriksa"> | $Enums.StatusPoli
    detailNotaJalan?: DetailNotaJalanListRelationFilter
  }

  export type RegPeriksaOrderByWithRelationInput = {
    no_reg?: SortOrder
    no_rawat?: SortOrder
    tgl_registrasi?: SortOrder
    jam_reg?: SortOrder
    kd_dokter?: SortOrder
    no_rkm_medis?: SortOrder
    kd_poli?: SortOrder
    p_jawab?: SortOrder
    almt_pj?: SortOrder
    hubunganpj?: SortOrder
    biaya_reg?: SortOrder
    stts?: SortOrder
    stts_daftar?: SortOrder
    status_lanjut?: SortOrder
    kd_pj?: SortOrder
    umurdaftar?: SortOrder
    sttsumur?: SortOrder
    status_bayar?: SortOrder
    status_poli?: SortOrder
    detailNotaJalan?: DetailNotaJalanOrderByRelationAggregateInput
    _relevance?: RegPeriksaOrderByRelevanceInput
  }

  export type RegPeriksaWhereUniqueInput = Prisma.AtLeast<{
    no_rawat?: string
    AND?: RegPeriksaWhereInput | RegPeriksaWhereInput[]
    OR?: RegPeriksaWhereInput[]
    NOT?: RegPeriksaWhereInput | RegPeriksaWhereInput[]
    no_reg?: StringFilter<"RegPeriksa"> | string
    tgl_registrasi?: DateTimeFilter<"RegPeriksa"> | Date | string
    jam_reg?: DateTimeFilter<"RegPeriksa"> | Date | string
    kd_dokter?: StringFilter<"RegPeriksa"> | string
    no_rkm_medis?: StringFilter<"RegPeriksa"> | string
    kd_poli?: StringFilter<"RegPeriksa"> | string
    p_jawab?: StringFilter<"RegPeriksa"> | string
    almt_pj?: StringFilter<"RegPeriksa"> | string
    hubunganpj?: StringFilter<"RegPeriksa"> | string
    biaya_reg?: FloatFilter<"RegPeriksa"> | number
    stts?: EnumStatusRegPeriksaFilter<"RegPeriksa"> | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFilter<"RegPeriksa"> | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFilter<"RegPeriksa"> | $Enums.StatusLanjut
    kd_pj?: StringFilter<"RegPeriksa"> | string
    umurdaftar?: IntFilter<"RegPeriksa"> | number
    sttsumur?: EnumStatusUmurFilter<"RegPeriksa"> | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFilter<"RegPeriksa"> | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFilter<"RegPeriksa"> | $Enums.StatusPoli
    detailNotaJalan?: DetailNotaJalanListRelationFilter
  }, "no_rawat">

  export type RegPeriksaOrderByWithAggregationInput = {
    no_reg?: SortOrder
    no_rawat?: SortOrder
    tgl_registrasi?: SortOrder
    jam_reg?: SortOrder
    kd_dokter?: SortOrder
    no_rkm_medis?: SortOrder
    kd_poli?: SortOrder
    p_jawab?: SortOrder
    almt_pj?: SortOrder
    hubunganpj?: SortOrder
    biaya_reg?: SortOrder
    stts?: SortOrder
    stts_daftar?: SortOrder
    status_lanjut?: SortOrder
    kd_pj?: SortOrder
    umurdaftar?: SortOrder
    sttsumur?: SortOrder
    status_bayar?: SortOrder
    status_poli?: SortOrder
    _count?: RegPeriksaCountOrderByAggregateInput
    _avg?: RegPeriksaAvgOrderByAggregateInput
    _max?: RegPeriksaMaxOrderByAggregateInput
    _min?: RegPeriksaMinOrderByAggregateInput
    _sum?: RegPeriksaSumOrderByAggregateInput
  }

  export type RegPeriksaScalarWhereWithAggregatesInput = {
    AND?: RegPeriksaScalarWhereWithAggregatesInput | RegPeriksaScalarWhereWithAggregatesInput[]
    OR?: RegPeriksaScalarWhereWithAggregatesInput[]
    NOT?: RegPeriksaScalarWhereWithAggregatesInput | RegPeriksaScalarWhereWithAggregatesInput[]
    no_reg?: StringWithAggregatesFilter<"RegPeriksa"> | string
    no_rawat?: StringWithAggregatesFilter<"RegPeriksa"> | string
    tgl_registrasi?: DateTimeWithAggregatesFilter<"RegPeriksa"> | Date | string
    jam_reg?: DateTimeWithAggregatesFilter<"RegPeriksa"> | Date | string
    kd_dokter?: StringWithAggregatesFilter<"RegPeriksa"> | string
    no_rkm_medis?: StringWithAggregatesFilter<"RegPeriksa"> | string
    kd_poli?: StringWithAggregatesFilter<"RegPeriksa"> | string
    p_jawab?: StringWithAggregatesFilter<"RegPeriksa"> | string
    almt_pj?: StringWithAggregatesFilter<"RegPeriksa"> | string
    hubunganpj?: StringWithAggregatesFilter<"RegPeriksa"> | string
    biaya_reg?: FloatWithAggregatesFilter<"RegPeriksa"> | number
    stts?: EnumStatusRegPeriksaWithAggregatesFilter<"RegPeriksa"> | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarWithAggregatesFilter<"RegPeriksa"> | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutWithAggregatesFilter<"RegPeriksa"> | $Enums.StatusLanjut
    kd_pj?: StringWithAggregatesFilter<"RegPeriksa"> | string
    umurdaftar?: IntWithAggregatesFilter<"RegPeriksa"> | number
    sttsumur?: EnumStatusUmurWithAggregatesFilter<"RegPeriksa"> | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarWithAggregatesFilter<"RegPeriksa"> | $Enums.StatusBayar
    status_poli?: EnumStatusPoliWithAggregatesFilter<"RegPeriksa"> | $Enums.StatusPoli
  }

  export type DataTriaseIgdCreateInput = {
    no_rawat: string
    tgl_kunjungan: Date | string
    cara_masuk: $Enums.CaraMasuk
    alat_transportasi: $Enums.AlatTransportasi
    alasan_kedatangan: $Enums.AlasanKedatangan
    keterangan_kedatangan: string
    kode_kasus: string
    tekanan_darah: string
    nadi: string
    pernapasan: string
    suhu: string
    saturasi_o2: string
    nyeri: string
  }

  export type DataTriaseIgdUncheckedCreateInput = {
    no_rawat: string
    tgl_kunjungan: Date | string
    cara_masuk: $Enums.CaraMasuk
    alat_transportasi: $Enums.AlatTransportasi
    alasan_kedatangan: $Enums.AlasanKedatangan
    keterangan_kedatangan: string
    kode_kasus: string
    tekanan_darah: string
    nadi: string
    pernapasan: string
    suhu: string
    saturasi_o2: string
    nyeri: string
  }

  export type DataTriaseIgdUpdateInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_kunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    cara_masuk?: EnumCaraMasukFieldUpdateOperationsInput | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiFieldUpdateOperationsInput | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganFieldUpdateOperationsInput | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringFieldUpdateOperationsInput | string
    kode_kasus?: StringFieldUpdateOperationsInput | string
    tekanan_darah?: StringFieldUpdateOperationsInput | string
    nadi?: StringFieldUpdateOperationsInput | string
    pernapasan?: StringFieldUpdateOperationsInput | string
    suhu?: StringFieldUpdateOperationsInput | string
    saturasi_o2?: StringFieldUpdateOperationsInput | string
    nyeri?: StringFieldUpdateOperationsInput | string
  }

  export type DataTriaseIgdUncheckedUpdateInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_kunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    cara_masuk?: EnumCaraMasukFieldUpdateOperationsInput | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiFieldUpdateOperationsInput | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganFieldUpdateOperationsInput | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringFieldUpdateOperationsInput | string
    kode_kasus?: StringFieldUpdateOperationsInput | string
    tekanan_darah?: StringFieldUpdateOperationsInput | string
    nadi?: StringFieldUpdateOperationsInput | string
    pernapasan?: StringFieldUpdateOperationsInput | string
    suhu?: StringFieldUpdateOperationsInput | string
    saturasi_o2?: StringFieldUpdateOperationsInput | string
    nyeri?: StringFieldUpdateOperationsInput | string
  }

  export type DataTriaseIgdCreateManyInput = {
    no_rawat: string
    tgl_kunjungan: Date | string
    cara_masuk: $Enums.CaraMasuk
    alat_transportasi: $Enums.AlatTransportasi
    alasan_kedatangan: $Enums.AlasanKedatangan
    keterangan_kedatangan: string
    kode_kasus: string
    tekanan_darah: string
    nadi: string
    pernapasan: string
    suhu: string
    saturasi_o2: string
    nyeri: string
  }

  export type DataTriaseIgdUpdateManyMutationInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_kunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    cara_masuk?: EnumCaraMasukFieldUpdateOperationsInput | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiFieldUpdateOperationsInput | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganFieldUpdateOperationsInput | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringFieldUpdateOperationsInput | string
    kode_kasus?: StringFieldUpdateOperationsInput | string
    tekanan_darah?: StringFieldUpdateOperationsInput | string
    nadi?: StringFieldUpdateOperationsInput | string
    pernapasan?: StringFieldUpdateOperationsInput | string
    suhu?: StringFieldUpdateOperationsInput | string
    saturasi_o2?: StringFieldUpdateOperationsInput | string
    nyeri?: StringFieldUpdateOperationsInput | string
  }

  export type DataTriaseIgdUncheckedUpdateManyInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_kunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    cara_masuk?: EnumCaraMasukFieldUpdateOperationsInput | $Enums.CaraMasuk
    alat_transportasi?: EnumAlatTransportasiFieldUpdateOperationsInput | $Enums.AlatTransportasi
    alasan_kedatangan?: EnumAlasanKedatanganFieldUpdateOperationsInput | $Enums.AlasanKedatangan
    keterangan_kedatangan?: StringFieldUpdateOperationsInput | string
    kode_kasus?: StringFieldUpdateOperationsInput | string
    tekanan_darah?: StringFieldUpdateOperationsInput | string
    nadi?: StringFieldUpdateOperationsInput | string
    pernapasan?: StringFieldUpdateOperationsInput | string
    suhu?: StringFieldUpdateOperationsInput | string
    saturasi_o2?: StringFieldUpdateOperationsInput | string
    nyeri?: StringFieldUpdateOperationsInput | string
  }

  export type DetailNotaJalanCreateInput = {
    namaBayar: string
    besarppn: number
    besarBayar: number
    regPeriksa: RegPeriksaCreateNestedOneWithoutDetailNotaJalanInput
  }

  export type DetailNotaJalanUncheckedCreateInput = {
    noRawat: string
    namaBayar: string
    besarppn: number
    besarBayar: number
  }

  export type DetailNotaJalanUpdateInput = {
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
    regPeriksa?: RegPeriksaUpdateOneRequiredWithoutDetailNotaJalanNestedInput
  }

  export type DetailNotaJalanUncheckedUpdateInput = {
    noRawat?: StringFieldUpdateOperationsInput | string
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailNotaJalanCreateManyInput = {
    noRawat: string
    namaBayar: string
    besarppn: number
    besarBayar: number
  }

  export type DetailNotaJalanUpdateManyMutationInput = {
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailNotaJalanUncheckedUpdateManyInput = {
    noRawat?: StringFieldUpdateOperationsInput | string
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
  }

  export type KamarCreateInput = {
    kdKamar: string
    kdBangsal: string
    tarifKamar: number
    status: $Enums.StatusKamar
    kelas: $Enums.KelasKamar
    statusData: $Enums.StatusData
  }

  export type KamarUncheckedCreateInput = {
    kdKamar: string
    kdBangsal: string
    tarifKamar: number
    status: $Enums.StatusKamar
    kelas: $Enums.KelasKamar
    statusData: $Enums.StatusData
  }

  export type KamarUpdateInput = {
    kdKamar?: StringFieldUpdateOperationsInput | string
    kdBangsal?: StringFieldUpdateOperationsInput | string
    tarifKamar?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    kelas?: EnumKelasKamarFieldUpdateOperationsInput | $Enums.KelasKamar
    statusData?: EnumStatusDataFieldUpdateOperationsInput | $Enums.StatusData
  }

  export type KamarUncheckedUpdateInput = {
    kdKamar?: StringFieldUpdateOperationsInput | string
    kdBangsal?: StringFieldUpdateOperationsInput | string
    tarifKamar?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    kelas?: EnumKelasKamarFieldUpdateOperationsInput | $Enums.KelasKamar
    statusData?: EnumStatusDataFieldUpdateOperationsInput | $Enums.StatusData
  }

  export type KamarCreateManyInput = {
    kdKamar: string
    kdBangsal: string
    tarifKamar: number
    status: $Enums.StatusKamar
    kelas: $Enums.KelasKamar
    statusData: $Enums.StatusData
  }

  export type KamarUpdateManyMutationInput = {
    kdKamar?: StringFieldUpdateOperationsInput | string
    kdBangsal?: StringFieldUpdateOperationsInput | string
    tarifKamar?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    kelas?: EnumKelasKamarFieldUpdateOperationsInput | $Enums.KelasKamar
    statusData?: EnumStatusDataFieldUpdateOperationsInput | $Enums.StatusData
  }

  export type KamarUncheckedUpdateManyInput = {
    kdKamar?: StringFieldUpdateOperationsInput | string
    kdBangsal?: StringFieldUpdateOperationsInput | string
    tarifKamar?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusKamarFieldUpdateOperationsInput | $Enums.StatusKamar
    kelas?: EnumKelasKamarFieldUpdateOperationsInput | $Enums.KelasKamar
    statusData?: EnumStatusDataFieldUpdateOperationsInput | $Enums.StatusData
  }

  export type PeriksaLabCreateInput = {
    no_rawat: string
    nip?: string | null
    kd_jenis_prw: string
    tgl_periksa: Date | string
    jam: Date | string
    dokter_perujuk?: string | null
    bagian_rs?: number | null
    bhp?: number | null
    tarif_perujuk?: number | null
    tarif_tindakan_dokter?: number | null
    tarif_tindakan_petugas?: number | null
    kso?: number | null
    menejemen?: number | null
    biaya?: number | null
    kd_dokter?: string | null
    status?: $Enums.StatusPeriksaLab | null
    kategori?: $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabUncheckedCreateInput = {
    no_rawat: string
    nip?: string | null
    kd_jenis_prw: string
    tgl_periksa: Date | string
    jam: Date | string
    dokter_perujuk?: string | null
    bagian_rs?: number | null
    bhp?: number | null
    tarif_perujuk?: number | null
    tarif_tindakan_dokter?: number | null
    tarif_tindakan_petugas?: number | null
    kso?: number | null
    menejemen?: number | null
    biaya?: number | null
    kd_dokter?: string | null
    status?: $Enums.StatusPeriksaLab | null
    kategori?: $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabUpdateInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    kd_jenis_prw?: StringFieldUpdateOperationsInput | string
    tgl_periksa?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter_perujuk?: NullableStringFieldUpdateOperationsInput | string | null
    bagian_rs?: NullableFloatFieldUpdateOperationsInput | number | null
    bhp?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_perujuk?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_dokter?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_petugas?: NullableFloatFieldUpdateOperationsInput | number | null
    kso?: NullableFloatFieldUpdateOperationsInput | number | null
    menejemen?: NullableFloatFieldUpdateOperationsInput | number | null
    biaya?: NullableFloatFieldUpdateOperationsInput | number | null
    kd_dokter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPeriksaLabFieldUpdateOperationsInput | $Enums.StatusPeriksaLab | null
    kategori?: NullableEnumKategoriPeriksaLabFieldUpdateOperationsInput | $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabUncheckedUpdateInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    kd_jenis_prw?: StringFieldUpdateOperationsInput | string
    tgl_periksa?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter_perujuk?: NullableStringFieldUpdateOperationsInput | string | null
    bagian_rs?: NullableFloatFieldUpdateOperationsInput | number | null
    bhp?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_perujuk?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_dokter?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_petugas?: NullableFloatFieldUpdateOperationsInput | number | null
    kso?: NullableFloatFieldUpdateOperationsInput | number | null
    menejemen?: NullableFloatFieldUpdateOperationsInput | number | null
    biaya?: NullableFloatFieldUpdateOperationsInput | number | null
    kd_dokter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPeriksaLabFieldUpdateOperationsInput | $Enums.StatusPeriksaLab | null
    kategori?: NullableEnumKategoriPeriksaLabFieldUpdateOperationsInput | $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabCreateManyInput = {
    no_rawat: string
    nip?: string | null
    kd_jenis_prw: string
    tgl_periksa: Date | string
    jam: Date | string
    dokter_perujuk?: string | null
    bagian_rs?: number | null
    bhp?: number | null
    tarif_perujuk?: number | null
    tarif_tindakan_dokter?: number | null
    tarif_tindakan_petugas?: number | null
    kso?: number | null
    menejemen?: number | null
    biaya?: number | null
    kd_dokter?: string | null
    status?: $Enums.StatusPeriksaLab | null
    kategori?: $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabUpdateManyMutationInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    kd_jenis_prw?: StringFieldUpdateOperationsInput | string
    tgl_periksa?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter_perujuk?: NullableStringFieldUpdateOperationsInput | string | null
    bagian_rs?: NullableFloatFieldUpdateOperationsInput | number | null
    bhp?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_perujuk?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_dokter?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_petugas?: NullableFloatFieldUpdateOperationsInput | number | null
    kso?: NullableFloatFieldUpdateOperationsInput | number | null
    menejemen?: NullableFloatFieldUpdateOperationsInput | number | null
    biaya?: NullableFloatFieldUpdateOperationsInput | number | null
    kd_dokter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPeriksaLabFieldUpdateOperationsInput | $Enums.StatusPeriksaLab | null
    kategori?: NullableEnumKategoriPeriksaLabFieldUpdateOperationsInput | $Enums.KategoriPeriksaLab | null
  }

  export type PeriksaLabUncheckedUpdateManyInput = {
    no_rawat?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    kd_jenis_prw?: StringFieldUpdateOperationsInput | string
    tgl_periksa?: DateTimeFieldUpdateOperationsInput | Date | string
    jam?: DateTimeFieldUpdateOperationsInput | Date | string
    dokter_perujuk?: NullableStringFieldUpdateOperationsInput | string | null
    bagian_rs?: NullableFloatFieldUpdateOperationsInput | number | null
    bhp?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_perujuk?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_dokter?: NullableFloatFieldUpdateOperationsInput | number | null
    tarif_tindakan_petugas?: NullableFloatFieldUpdateOperationsInput | number | null
    kso?: NullableFloatFieldUpdateOperationsInput | number | null
    menejemen?: NullableFloatFieldUpdateOperationsInput | number | null
    biaya?: NullableFloatFieldUpdateOperationsInput | number | null
    kd_dokter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPeriksaLabFieldUpdateOperationsInput | $Enums.StatusPeriksaLab | null
    kategori?: NullableEnumKategoriPeriksaLabFieldUpdateOperationsInput | $Enums.KategoriPeriksaLab | null
  }

  export type PetugasCreateInput = {
    nip: string
    nama: string
    jk: $Enums.JenisKelamin
    tmpLahir?: string | null
    tglLahir?: Date | string | null
    golDarah?: $Enums.GolDarah | null
    agama?: string | null
    sttsNikah?: $Enums.StatusNikah | null
    alamat?: string | null
    kdJbtn?: string | null
    noTelp?: string | null
    email?: string | null
    status?: $Enums.StatusPetugas | null
  }

  export type PetugasUncheckedCreateInput = {
    nip: string
    nama: string
    jk: $Enums.JenisKelamin
    tmpLahir?: string | null
    tglLahir?: Date | string | null
    golDarah?: $Enums.GolDarah | null
    agama?: string | null
    sttsNikah?: $Enums.StatusNikah | null
    alamat?: string | null
    kdJbtn?: string | null
    noTelp?: string | null
    email?: string | null
    status?: $Enums.StatusPetugas | null
  }

  export type PetugasUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jk?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tmpLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tglLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    golDarah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    sttsNikah?: NullableEnumStatusNikahFieldUpdateOperationsInput | $Enums.StatusNikah | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kdJbtn?: NullableStringFieldUpdateOperationsInput | string | null
    noTelp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPetugasFieldUpdateOperationsInput | $Enums.StatusPetugas | null
  }

  export type PetugasUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jk?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tmpLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tglLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    golDarah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    sttsNikah?: NullableEnumStatusNikahFieldUpdateOperationsInput | $Enums.StatusNikah | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kdJbtn?: NullableStringFieldUpdateOperationsInput | string | null
    noTelp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPetugasFieldUpdateOperationsInput | $Enums.StatusPetugas | null
  }

  export type PetugasCreateManyInput = {
    nip: string
    nama: string
    jk: $Enums.JenisKelamin
    tmpLahir?: string | null
    tglLahir?: Date | string | null
    golDarah?: $Enums.GolDarah | null
    agama?: string | null
    sttsNikah?: $Enums.StatusNikah | null
    alamat?: string | null
    kdJbtn?: string | null
    noTelp?: string | null
    email?: string | null
    status?: $Enums.StatusPetugas | null
  }

  export type PetugasUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jk?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tmpLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tglLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    golDarah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    sttsNikah?: NullableEnumStatusNikahFieldUpdateOperationsInput | $Enums.StatusNikah | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kdJbtn?: NullableStringFieldUpdateOperationsInput | string | null
    noTelp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPetugasFieldUpdateOperationsInput | $Enums.StatusPetugas | null
  }

  export type PetugasUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jk?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tmpLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tglLahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    golDarah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    sttsNikah?: NullableEnumStatusNikahFieldUpdateOperationsInput | $Enums.StatusNikah | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kdJbtn?: NullableStringFieldUpdateOperationsInput | string | null
    noTelp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumStatusPetugasFieldUpdateOperationsInput | $Enums.StatusPetugas | null
  }

  export type RegPeriksaCreateInput = {
    no_reg: string
    no_rawat: string
    tgl_registrasi: Date | string
    jam_reg: Date | string
    kd_dokter: string
    no_rkm_medis: string
    kd_poli: string
    p_jawab: string
    almt_pj: string
    hubunganpj: string
    biaya_reg: number
    stts: $Enums.StatusRegPeriksa
    stts_daftar: $Enums.StatusDaftar
    status_lanjut: $Enums.StatusLanjut
    kd_pj: string
    umurdaftar: number
    sttsumur: $Enums.StatusUmur
    status_bayar: $Enums.StatusBayar
    status_poli: $Enums.StatusPoli
    detailNotaJalan?: DetailNotaJalanCreateNestedManyWithoutRegPeriksaInput
  }

  export type RegPeriksaUncheckedCreateInput = {
    no_reg: string
    no_rawat: string
    tgl_registrasi: Date | string
    jam_reg: Date | string
    kd_dokter: string
    no_rkm_medis: string
    kd_poli: string
    p_jawab: string
    almt_pj: string
    hubunganpj: string
    biaya_reg: number
    stts: $Enums.StatusRegPeriksa
    stts_daftar: $Enums.StatusDaftar
    status_lanjut: $Enums.StatusLanjut
    kd_pj: string
    umurdaftar: number
    sttsumur: $Enums.StatusUmur
    status_bayar: $Enums.StatusBayar
    status_poli: $Enums.StatusPoli
    detailNotaJalan?: DetailNotaJalanUncheckedCreateNestedManyWithoutRegPeriksaInput
  }

  export type RegPeriksaUpdateInput = {
    no_reg?: StringFieldUpdateOperationsInput | string
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_registrasi?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_reg?: DateTimeFieldUpdateOperationsInput | Date | string
    kd_dokter?: StringFieldUpdateOperationsInput | string
    no_rkm_medis?: StringFieldUpdateOperationsInput | string
    kd_poli?: StringFieldUpdateOperationsInput | string
    p_jawab?: StringFieldUpdateOperationsInput | string
    almt_pj?: StringFieldUpdateOperationsInput | string
    hubunganpj?: StringFieldUpdateOperationsInput | string
    biaya_reg?: FloatFieldUpdateOperationsInput | number
    stts?: EnumStatusRegPeriksaFieldUpdateOperationsInput | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFieldUpdateOperationsInput | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFieldUpdateOperationsInput | $Enums.StatusLanjut
    kd_pj?: StringFieldUpdateOperationsInput | string
    umurdaftar?: IntFieldUpdateOperationsInput | number
    sttsumur?: EnumStatusUmurFieldUpdateOperationsInput | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFieldUpdateOperationsInput | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFieldUpdateOperationsInput | $Enums.StatusPoli
    detailNotaJalan?: DetailNotaJalanUpdateManyWithoutRegPeriksaNestedInput
  }

  export type RegPeriksaUncheckedUpdateInput = {
    no_reg?: StringFieldUpdateOperationsInput | string
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_registrasi?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_reg?: DateTimeFieldUpdateOperationsInput | Date | string
    kd_dokter?: StringFieldUpdateOperationsInput | string
    no_rkm_medis?: StringFieldUpdateOperationsInput | string
    kd_poli?: StringFieldUpdateOperationsInput | string
    p_jawab?: StringFieldUpdateOperationsInput | string
    almt_pj?: StringFieldUpdateOperationsInput | string
    hubunganpj?: StringFieldUpdateOperationsInput | string
    biaya_reg?: FloatFieldUpdateOperationsInput | number
    stts?: EnumStatusRegPeriksaFieldUpdateOperationsInput | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFieldUpdateOperationsInput | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFieldUpdateOperationsInput | $Enums.StatusLanjut
    kd_pj?: StringFieldUpdateOperationsInput | string
    umurdaftar?: IntFieldUpdateOperationsInput | number
    sttsumur?: EnumStatusUmurFieldUpdateOperationsInput | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFieldUpdateOperationsInput | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFieldUpdateOperationsInput | $Enums.StatusPoli
    detailNotaJalan?: DetailNotaJalanUncheckedUpdateManyWithoutRegPeriksaNestedInput
  }

  export type RegPeriksaCreateManyInput = {
    no_reg: string
    no_rawat: string
    tgl_registrasi: Date | string
    jam_reg: Date | string
    kd_dokter: string
    no_rkm_medis: string
    kd_poli: string
    p_jawab: string
    almt_pj: string
    hubunganpj: string
    biaya_reg: number
    stts: $Enums.StatusRegPeriksa
    stts_daftar: $Enums.StatusDaftar
    status_lanjut: $Enums.StatusLanjut
    kd_pj: string
    umurdaftar: number
    sttsumur: $Enums.StatusUmur
    status_bayar: $Enums.StatusBayar
    status_poli: $Enums.StatusPoli
  }

  export type RegPeriksaUpdateManyMutationInput = {
    no_reg?: StringFieldUpdateOperationsInput | string
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_registrasi?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_reg?: DateTimeFieldUpdateOperationsInput | Date | string
    kd_dokter?: StringFieldUpdateOperationsInput | string
    no_rkm_medis?: StringFieldUpdateOperationsInput | string
    kd_poli?: StringFieldUpdateOperationsInput | string
    p_jawab?: StringFieldUpdateOperationsInput | string
    almt_pj?: StringFieldUpdateOperationsInput | string
    hubunganpj?: StringFieldUpdateOperationsInput | string
    biaya_reg?: FloatFieldUpdateOperationsInput | number
    stts?: EnumStatusRegPeriksaFieldUpdateOperationsInput | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFieldUpdateOperationsInput | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFieldUpdateOperationsInput | $Enums.StatusLanjut
    kd_pj?: StringFieldUpdateOperationsInput | string
    umurdaftar?: IntFieldUpdateOperationsInput | number
    sttsumur?: EnumStatusUmurFieldUpdateOperationsInput | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFieldUpdateOperationsInput | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFieldUpdateOperationsInput | $Enums.StatusPoli
  }

  export type RegPeriksaUncheckedUpdateManyInput = {
    no_reg?: StringFieldUpdateOperationsInput | string
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_registrasi?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_reg?: DateTimeFieldUpdateOperationsInput | Date | string
    kd_dokter?: StringFieldUpdateOperationsInput | string
    no_rkm_medis?: StringFieldUpdateOperationsInput | string
    kd_poli?: StringFieldUpdateOperationsInput | string
    p_jawab?: StringFieldUpdateOperationsInput | string
    almt_pj?: StringFieldUpdateOperationsInput | string
    hubunganpj?: StringFieldUpdateOperationsInput | string
    biaya_reg?: FloatFieldUpdateOperationsInput | number
    stts?: EnumStatusRegPeriksaFieldUpdateOperationsInput | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFieldUpdateOperationsInput | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFieldUpdateOperationsInput | $Enums.StatusLanjut
    kd_pj?: StringFieldUpdateOperationsInput | string
    umurdaftar?: IntFieldUpdateOperationsInput | number
    sttsumur?: EnumStatusUmurFieldUpdateOperationsInput | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFieldUpdateOperationsInput | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFieldUpdateOperationsInput | $Enums.StatusPoli
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumCaraMasukFilter<$PrismaModel = never> = {
    equals?: $Enums.CaraMasuk | EnumCaraMasukFieldRefInput<$PrismaModel>
    in?: $Enums.CaraMasuk[]
    notIn?: $Enums.CaraMasuk[]
    not?: NestedEnumCaraMasukFilter<$PrismaModel> | $Enums.CaraMasuk
  }

  export type EnumAlatTransportasiFilter<$PrismaModel = never> = {
    equals?: $Enums.AlatTransportasi | EnumAlatTransportasiFieldRefInput<$PrismaModel>
    in?: $Enums.AlatTransportasi[]
    notIn?: $Enums.AlatTransportasi[]
    not?: NestedEnumAlatTransportasiFilter<$PrismaModel> | $Enums.AlatTransportasi
  }

  export type EnumAlasanKedatanganFilter<$PrismaModel = never> = {
    equals?: $Enums.AlasanKedatangan | EnumAlasanKedatanganFieldRefInput<$PrismaModel>
    in?: $Enums.AlasanKedatangan[]
    notIn?: $Enums.AlasanKedatangan[]
    not?: NestedEnumAlasanKedatanganFilter<$PrismaModel> | $Enums.AlasanKedatangan
  }

  export type DataTriaseIgdOrderByRelevanceInput = {
    fields: DataTriaseIgdOrderByRelevanceFieldEnum | DataTriaseIgdOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataTriaseIgdCountOrderByAggregateInput = {
    no_rawat?: SortOrder
    tgl_kunjungan?: SortOrder
    cara_masuk?: SortOrder
    alat_transportasi?: SortOrder
    alasan_kedatangan?: SortOrder
    keterangan_kedatangan?: SortOrder
    kode_kasus?: SortOrder
    tekanan_darah?: SortOrder
    nadi?: SortOrder
    pernapasan?: SortOrder
    suhu?: SortOrder
    saturasi_o2?: SortOrder
    nyeri?: SortOrder
  }

  export type DataTriaseIgdMaxOrderByAggregateInput = {
    no_rawat?: SortOrder
    tgl_kunjungan?: SortOrder
    cara_masuk?: SortOrder
    alat_transportasi?: SortOrder
    alasan_kedatangan?: SortOrder
    keterangan_kedatangan?: SortOrder
    kode_kasus?: SortOrder
    tekanan_darah?: SortOrder
    nadi?: SortOrder
    pernapasan?: SortOrder
    suhu?: SortOrder
    saturasi_o2?: SortOrder
    nyeri?: SortOrder
  }

  export type DataTriaseIgdMinOrderByAggregateInput = {
    no_rawat?: SortOrder
    tgl_kunjungan?: SortOrder
    cara_masuk?: SortOrder
    alat_transportasi?: SortOrder
    alasan_kedatangan?: SortOrder
    keterangan_kedatangan?: SortOrder
    kode_kasus?: SortOrder
    tekanan_darah?: SortOrder
    nadi?: SortOrder
    pernapasan?: SortOrder
    suhu?: SortOrder
    saturasi_o2?: SortOrder
    nyeri?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCaraMasukWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaraMasuk | EnumCaraMasukFieldRefInput<$PrismaModel>
    in?: $Enums.CaraMasuk[]
    notIn?: $Enums.CaraMasuk[]
    not?: NestedEnumCaraMasukWithAggregatesFilter<$PrismaModel> | $Enums.CaraMasuk
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaraMasukFilter<$PrismaModel>
    _max?: NestedEnumCaraMasukFilter<$PrismaModel>
  }

  export type EnumAlatTransportasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlatTransportasi | EnumAlatTransportasiFieldRefInput<$PrismaModel>
    in?: $Enums.AlatTransportasi[]
    notIn?: $Enums.AlatTransportasi[]
    not?: NestedEnumAlatTransportasiWithAggregatesFilter<$PrismaModel> | $Enums.AlatTransportasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlatTransportasiFilter<$PrismaModel>
    _max?: NestedEnumAlatTransportasiFilter<$PrismaModel>
  }

  export type EnumAlasanKedatanganWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlasanKedatangan | EnumAlasanKedatanganFieldRefInput<$PrismaModel>
    in?: $Enums.AlasanKedatangan[]
    notIn?: $Enums.AlasanKedatangan[]
    not?: NestedEnumAlasanKedatanganWithAggregatesFilter<$PrismaModel> | $Enums.AlasanKedatangan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlasanKedatanganFilter<$PrismaModel>
    _max?: NestedEnumAlasanKedatanganFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RegPeriksaScalarRelationFilter = {
    is?: RegPeriksaWhereInput
    isNot?: RegPeriksaWhereInput
  }

  export type DetailNotaJalanOrderByRelevanceInput = {
    fields: DetailNotaJalanOrderByRelevanceFieldEnum | DetailNotaJalanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DetailNotaJalanNoRawatNamaBayarCompoundUniqueInput = {
    noRawat: string
    namaBayar: string
  }

  export type DetailNotaJalanCountOrderByAggregateInput = {
    noRawat?: SortOrder
    namaBayar?: SortOrder
    besarppn?: SortOrder
    besarBayar?: SortOrder
  }

  export type DetailNotaJalanAvgOrderByAggregateInput = {
    besarppn?: SortOrder
    besarBayar?: SortOrder
  }

  export type DetailNotaJalanMaxOrderByAggregateInput = {
    noRawat?: SortOrder
    namaBayar?: SortOrder
    besarppn?: SortOrder
    besarBayar?: SortOrder
  }

  export type DetailNotaJalanMinOrderByAggregateInput = {
    noRawat?: SortOrder
    namaBayar?: SortOrder
    besarppn?: SortOrder
    besarBayar?: SortOrder
  }

  export type DetailNotaJalanSumOrderByAggregateInput = {
    besarppn?: SortOrder
    besarBayar?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatusKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[]
    notIn?: $Enums.StatusKamar[]
    not?: NestedEnumStatusKamarFilter<$PrismaModel> | $Enums.StatusKamar
  }

  export type EnumKelasKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.KelasKamar | EnumKelasKamarFieldRefInput<$PrismaModel>
    in?: $Enums.KelasKamar[]
    notIn?: $Enums.KelasKamar[]
    not?: NestedEnumKelasKamarFilter<$PrismaModel> | $Enums.KelasKamar
  }

  export type EnumStatusDataFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusData | EnumStatusDataFieldRefInput<$PrismaModel>
    in?: $Enums.StatusData[]
    notIn?: $Enums.StatusData[]
    not?: NestedEnumStatusDataFilter<$PrismaModel> | $Enums.StatusData
  }

  export type KamarOrderByRelevanceInput = {
    fields: KamarOrderByRelevanceFieldEnum | KamarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KamarCountOrderByAggregateInput = {
    kdKamar?: SortOrder
    kdBangsal?: SortOrder
    tarifKamar?: SortOrder
    status?: SortOrder
    kelas?: SortOrder
    statusData?: SortOrder
  }

  export type KamarAvgOrderByAggregateInput = {
    tarifKamar?: SortOrder
  }

  export type KamarMaxOrderByAggregateInput = {
    kdKamar?: SortOrder
    kdBangsal?: SortOrder
    tarifKamar?: SortOrder
    status?: SortOrder
    kelas?: SortOrder
    statusData?: SortOrder
  }

  export type KamarMinOrderByAggregateInput = {
    kdKamar?: SortOrder
    kdBangsal?: SortOrder
    tarifKamar?: SortOrder
    status?: SortOrder
    kelas?: SortOrder
    statusData?: SortOrder
  }

  export type KamarSumOrderByAggregateInput = {
    tarifKamar?: SortOrder
  }

  export type EnumStatusKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[]
    notIn?: $Enums.StatusKamar[]
    not?: NestedEnumStatusKamarWithAggregatesFilter<$PrismaModel> | $Enums.StatusKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKamarFilter<$PrismaModel>
    _max?: NestedEnumStatusKamarFilter<$PrismaModel>
  }

  export type EnumKelasKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KelasKamar | EnumKelasKamarFieldRefInput<$PrismaModel>
    in?: $Enums.KelasKamar[]
    notIn?: $Enums.KelasKamar[]
    not?: NestedEnumKelasKamarWithAggregatesFilter<$PrismaModel> | $Enums.KelasKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKelasKamarFilter<$PrismaModel>
    _max?: NestedEnumKelasKamarFilter<$PrismaModel>
  }

  export type EnumStatusDataWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusData | EnumStatusDataFieldRefInput<$PrismaModel>
    in?: $Enums.StatusData[]
    notIn?: $Enums.StatusData[]
    not?: NestedEnumStatusDataWithAggregatesFilter<$PrismaModel> | $Enums.StatusData
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDataFilter<$PrismaModel>
    _max?: NestedEnumStatusDataFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusPeriksaLabNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeriksaLab | EnumStatusPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPeriksaLab[] | null
    notIn?: $Enums.StatusPeriksaLab[] | null
    not?: NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel> | $Enums.StatusPeriksaLab | null
  }

  export type EnumKategoriPeriksaLabNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriPeriksaLab | EnumKategoriPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.KategoriPeriksaLab[] | null
    notIn?: $Enums.KategoriPeriksaLab[] | null
    not?: NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel> | $Enums.KategoriPeriksaLab | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PeriksaLabOrderByRelevanceInput = {
    fields: PeriksaLabOrderByRelevanceFieldEnum | PeriksaLabOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PeriksaLabNo_rawatKd_jenis_prwTgl_periksaJamCompoundUniqueInput = {
    no_rawat: string
    kd_jenis_prw: string
    tgl_periksa: Date | string
    jam: Date | string
  }

  export type PeriksaLabCountOrderByAggregateInput = {
    no_rawat?: SortOrder
    nip?: SortOrder
    kd_jenis_prw?: SortOrder
    tgl_periksa?: SortOrder
    jam?: SortOrder
    dokter_perujuk?: SortOrder
    bagian_rs?: SortOrder
    bhp?: SortOrder
    tarif_perujuk?: SortOrder
    tarif_tindakan_dokter?: SortOrder
    tarif_tindakan_petugas?: SortOrder
    kso?: SortOrder
    menejemen?: SortOrder
    biaya?: SortOrder
    kd_dokter?: SortOrder
    status?: SortOrder
    kategori?: SortOrder
  }

  export type PeriksaLabAvgOrderByAggregateInput = {
    bagian_rs?: SortOrder
    bhp?: SortOrder
    tarif_perujuk?: SortOrder
    tarif_tindakan_dokter?: SortOrder
    tarif_tindakan_petugas?: SortOrder
    kso?: SortOrder
    menejemen?: SortOrder
    biaya?: SortOrder
  }

  export type PeriksaLabMaxOrderByAggregateInput = {
    no_rawat?: SortOrder
    nip?: SortOrder
    kd_jenis_prw?: SortOrder
    tgl_periksa?: SortOrder
    jam?: SortOrder
    dokter_perujuk?: SortOrder
    bagian_rs?: SortOrder
    bhp?: SortOrder
    tarif_perujuk?: SortOrder
    tarif_tindakan_dokter?: SortOrder
    tarif_tindakan_petugas?: SortOrder
    kso?: SortOrder
    menejemen?: SortOrder
    biaya?: SortOrder
    kd_dokter?: SortOrder
    status?: SortOrder
    kategori?: SortOrder
  }

  export type PeriksaLabMinOrderByAggregateInput = {
    no_rawat?: SortOrder
    nip?: SortOrder
    kd_jenis_prw?: SortOrder
    tgl_periksa?: SortOrder
    jam?: SortOrder
    dokter_perujuk?: SortOrder
    bagian_rs?: SortOrder
    bhp?: SortOrder
    tarif_perujuk?: SortOrder
    tarif_tindakan_dokter?: SortOrder
    tarif_tindakan_petugas?: SortOrder
    kso?: SortOrder
    menejemen?: SortOrder
    biaya?: SortOrder
    kd_dokter?: SortOrder
    status?: SortOrder
    kategori?: SortOrder
  }

  export type PeriksaLabSumOrderByAggregateInput = {
    bagian_rs?: SortOrder
    bhp?: SortOrder
    tarif_perujuk?: SortOrder
    tarif_tindakan_dokter?: SortOrder
    tarif_tindakan_petugas?: SortOrder
    kso?: SortOrder
    menejemen?: SortOrder
    biaya?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumStatusPeriksaLabNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeriksaLab | EnumStatusPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPeriksaLab[] | null
    notIn?: $Enums.StatusPeriksaLab[] | null
    not?: NestedEnumStatusPeriksaLabNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPeriksaLab | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel>
  }

  export type EnumKategoriPeriksaLabNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriPeriksaLab | EnumKategoriPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.KategoriPeriksaLab[] | null
    notIn?: $Enums.KategoriPeriksaLab[] | null
    not?: NestedEnumKategoriPeriksaLabNullableWithAggregatesFilter<$PrismaModel> | $Enums.KategoriPeriksaLab | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel>
    _max?: NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel>
  }

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGolDarahNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableFilter<$PrismaModel> | $Enums.GolDarah | null
  }

  export type EnumStatusNikahNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNikah | EnumStatusNikahFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusNikah[] | null
    notIn?: $Enums.StatusNikah[] | null
    not?: NestedEnumStatusNikahNullableFilter<$PrismaModel> | $Enums.StatusNikah | null
  }

  export type EnumStatusPetugasNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPetugas | EnumStatusPetugasFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPetugas[] | null
    notIn?: $Enums.StatusPetugas[] | null
    not?: NestedEnumStatusPetugasNullableFilter<$PrismaModel> | $Enums.StatusPetugas | null
  }

  export type PetugasOrderByRelevanceInput = {
    fields: PetugasOrderByRelevanceFieldEnum | PetugasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PetugasCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    jk?: SortOrder
    tmpLahir?: SortOrder
    tglLahir?: SortOrder
    golDarah?: SortOrder
    agama?: SortOrder
    sttsNikah?: SortOrder
    alamat?: SortOrder
    kdJbtn?: SortOrder
    noTelp?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type PetugasMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    jk?: SortOrder
    tmpLahir?: SortOrder
    tglLahir?: SortOrder
    golDarah?: SortOrder
    agama?: SortOrder
    sttsNikah?: SortOrder
    alamat?: SortOrder
    kdJbtn?: SortOrder
    noTelp?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type PetugasMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    jk?: SortOrder
    tmpLahir?: SortOrder
    tglLahir?: SortOrder
    golDarah?: SortOrder
    agama?: SortOrder
    sttsNikah?: SortOrder
    alamat?: SortOrder
    kdJbtn?: SortOrder
    noTelp?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGolDarahNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableWithAggregatesFilter<$PrismaModel> | $Enums.GolDarah | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGolDarahNullableFilter<$PrismaModel>
    _max?: NestedEnumGolDarahNullableFilter<$PrismaModel>
  }

  export type EnumStatusNikahNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNikah | EnumStatusNikahFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusNikah[] | null
    notIn?: $Enums.StatusNikah[] | null
    not?: NestedEnumStatusNikahNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusNikah | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNikahNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNikahNullableFilter<$PrismaModel>
  }

  export type EnumStatusPetugasNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPetugas | EnumStatusPetugasFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPetugas[] | null
    notIn?: $Enums.StatusPetugas[] | null
    not?: NestedEnumStatusPetugasNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPetugas | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPetugasNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPetugasNullableFilter<$PrismaModel>
  }

  export type EnumStatusRegPeriksaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRegPeriksa | EnumStatusRegPeriksaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRegPeriksa[]
    notIn?: $Enums.StatusRegPeriksa[]
    not?: NestedEnumStatusRegPeriksaFilter<$PrismaModel> | $Enums.StatusRegPeriksa
  }

  export type EnumStatusDaftarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDaftar | EnumStatusDaftarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDaftar[]
    notIn?: $Enums.StatusDaftar[]
    not?: NestedEnumStatusDaftarFilter<$PrismaModel> | $Enums.StatusDaftar
  }

  export type EnumStatusLanjutFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLanjut | EnumStatusLanjutFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLanjut[]
    notIn?: $Enums.StatusLanjut[]
    not?: NestedEnumStatusLanjutFilter<$PrismaModel> | $Enums.StatusLanjut
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusUmurFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUmur | EnumStatusUmurFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUmur[]
    notIn?: $Enums.StatusUmur[]
    not?: NestedEnumStatusUmurFilter<$PrismaModel> | $Enums.StatusUmur
  }

  export type EnumStatusBayarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBayar | EnumStatusBayarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBayar[]
    notIn?: $Enums.StatusBayar[]
    not?: NestedEnumStatusBayarFilter<$PrismaModel> | $Enums.StatusBayar
  }

  export type EnumStatusPoliFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPoli | EnumStatusPoliFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPoli[]
    notIn?: $Enums.StatusPoli[]
    not?: NestedEnumStatusPoliFilter<$PrismaModel> | $Enums.StatusPoli
  }

  export type DetailNotaJalanListRelationFilter = {
    every?: DetailNotaJalanWhereInput
    some?: DetailNotaJalanWhereInput
    none?: DetailNotaJalanWhereInput
  }

  export type DetailNotaJalanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegPeriksaOrderByRelevanceInput = {
    fields: RegPeriksaOrderByRelevanceFieldEnum | RegPeriksaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegPeriksaCountOrderByAggregateInput = {
    no_reg?: SortOrder
    no_rawat?: SortOrder
    tgl_registrasi?: SortOrder
    jam_reg?: SortOrder
    kd_dokter?: SortOrder
    no_rkm_medis?: SortOrder
    kd_poli?: SortOrder
    p_jawab?: SortOrder
    almt_pj?: SortOrder
    hubunganpj?: SortOrder
    biaya_reg?: SortOrder
    stts?: SortOrder
    stts_daftar?: SortOrder
    status_lanjut?: SortOrder
    kd_pj?: SortOrder
    umurdaftar?: SortOrder
    sttsumur?: SortOrder
    status_bayar?: SortOrder
    status_poli?: SortOrder
  }

  export type RegPeriksaAvgOrderByAggregateInput = {
    biaya_reg?: SortOrder
    umurdaftar?: SortOrder
  }

  export type RegPeriksaMaxOrderByAggregateInput = {
    no_reg?: SortOrder
    no_rawat?: SortOrder
    tgl_registrasi?: SortOrder
    jam_reg?: SortOrder
    kd_dokter?: SortOrder
    no_rkm_medis?: SortOrder
    kd_poli?: SortOrder
    p_jawab?: SortOrder
    almt_pj?: SortOrder
    hubunganpj?: SortOrder
    biaya_reg?: SortOrder
    stts?: SortOrder
    stts_daftar?: SortOrder
    status_lanjut?: SortOrder
    kd_pj?: SortOrder
    umurdaftar?: SortOrder
    sttsumur?: SortOrder
    status_bayar?: SortOrder
    status_poli?: SortOrder
  }

  export type RegPeriksaMinOrderByAggregateInput = {
    no_reg?: SortOrder
    no_rawat?: SortOrder
    tgl_registrasi?: SortOrder
    jam_reg?: SortOrder
    kd_dokter?: SortOrder
    no_rkm_medis?: SortOrder
    kd_poli?: SortOrder
    p_jawab?: SortOrder
    almt_pj?: SortOrder
    hubunganpj?: SortOrder
    biaya_reg?: SortOrder
    stts?: SortOrder
    stts_daftar?: SortOrder
    status_lanjut?: SortOrder
    kd_pj?: SortOrder
    umurdaftar?: SortOrder
    sttsumur?: SortOrder
    status_bayar?: SortOrder
    status_poli?: SortOrder
  }

  export type RegPeriksaSumOrderByAggregateInput = {
    biaya_reg?: SortOrder
    umurdaftar?: SortOrder
  }

  export type EnumStatusRegPeriksaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRegPeriksa | EnumStatusRegPeriksaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRegPeriksa[]
    notIn?: $Enums.StatusRegPeriksa[]
    not?: NestedEnumStatusRegPeriksaWithAggregatesFilter<$PrismaModel> | $Enums.StatusRegPeriksa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRegPeriksaFilter<$PrismaModel>
    _max?: NestedEnumStatusRegPeriksaFilter<$PrismaModel>
  }

  export type EnumStatusDaftarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDaftar | EnumStatusDaftarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDaftar[]
    notIn?: $Enums.StatusDaftar[]
    not?: NestedEnumStatusDaftarWithAggregatesFilter<$PrismaModel> | $Enums.StatusDaftar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDaftarFilter<$PrismaModel>
    _max?: NestedEnumStatusDaftarFilter<$PrismaModel>
  }

  export type EnumStatusLanjutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLanjut | EnumStatusLanjutFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLanjut[]
    notIn?: $Enums.StatusLanjut[]
    not?: NestedEnumStatusLanjutWithAggregatesFilter<$PrismaModel> | $Enums.StatusLanjut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusLanjutFilter<$PrismaModel>
    _max?: NestedEnumStatusLanjutFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusUmurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUmur | EnumStatusUmurFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUmur[]
    notIn?: $Enums.StatusUmur[]
    not?: NestedEnumStatusUmurWithAggregatesFilter<$PrismaModel> | $Enums.StatusUmur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUmurFilter<$PrismaModel>
    _max?: NestedEnumStatusUmurFilter<$PrismaModel>
  }

  export type EnumStatusBayarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBayar | EnumStatusBayarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBayar[]
    notIn?: $Enums.StatusBayar[]
    not?: NestedEnumStatusBayarWithAggregatesFilter<$PrismaModel> | $Enums.StatusBayar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBayarFilter<$PrismaModel>
    _max?: NestedEnumStatusBayarFilter<$PrismaModel>
  }

  export type EnumStatusPoliWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPoli | EnumStatusPoliFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPoli[]
    notIn?: $Enums.StatusPoli[]
    not?: NestedEnumStatusPoliWithAggregatesFilter<$PrismaModel> | $Enums.StatusPoli
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPoliFilter<$PrismaModel>
    _max?: NestedEnumStatusPoliFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumCaraMasukFieldUpdateOperationsInput = {
    set?: $Enums.CaraMasuk
  }

  export type EnumAlatTransportasiFieldUpdateOperationsInput = {
    set?: $Enums.AlatTransportasi
  }

  export type EnumAlasanKedatanganFieldUpdateOperationsInput = {
    set?: $Enums.AlasanKedatangan
  }

  export type RegPeriksaCreateNestedOneWithoutDetailNotaJalanInput = {
    create?: XOR<RegPeriksaCreateWithoutDetailNotaJalanInput, RegPeriksaUncheckedCreateWithoutDetailNotaJalanInput>
    connectOrCreate?: RegPeriksaCreateOrConnectWithoutDetailNotaJalanInput
    connect?: RegPeriksaWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegPeriksaUpdateOneRequiredWithoutDetailNotaJalanNestedInput = {
    create?: XOR<RegPeriksaCreateWithoutDetailNotaJalanInput, RegPeriksaUncheckedCreateWithoutDetailNotaJalanInput>
    connectOrCreate?: RegPeriksaCreateOrConnectWithoutDetailNotaJalanInput
    upsert?: RegPeriksaUpsertWithoutDetailNotaJalanInput
    connect?: RegPeriksaWhereUniqueInput
    update?: XOR<XOR<RegPeriksaUpdateToOneWithWhereWithoutDetailNotaJalanInput, RegPeriksaUpdateWithoutDetailNotaJalanInput>, RegPeriksaUncheckedUpdateWithoutDetailNotaJalanInput>
  }

  export type EnumStatusKamarFieldUpdateOperationsInput = {
    set?: $Enums.StatusKamar
  }

  export type EnumKelasKamarFieldUpdateOperationsInput = {
    set?: $Enums.KelasKamar
  }

  export type EnumStatusDataFieldUpdateOperationsInput = {
    set?: $Enums.StatusData
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumStatusPeriksaLabFieldUpdateOperationsInput = {
    set?: $Enums.StatusPeriksaLab | null
  }

  export type NullableEnumKategoriPeriksaLabFieldUpdateOperationsInput = {
    set?: $Enums.KategoriPeriksaLab | null
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGolDarahFieldUpdateOperationsInput = {
    set?: $Enums.GolDarah | null
  }

  export type NullableEnumStatusNikahFieldUpdateOperationsInput = {
    set?: $Enums.StatusNikah | null
  }

  export type NullableEnumStatusPetugasFieldUpdateOperationsInput = {
    set?: $Enums.StatusPetugas | null
  }

  export type DetailNotaJalanCreateNestedManyWithoutRegPeriksaInput = {
    create?: XOR<DetailNotaJalanCreateWithoutRegPeriksaInput, DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput> | DetailNotaJalanCreateWithoutRegPeriksaInput[] | DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput[]
    connectOrCreate?: DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput | DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput[]
    createMany?: DetailNotaJalanCreateManyRegPeriksaInputEnvelope
    connect?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
  }

  export type DetailNotaJalanUncheckedCreateNestedManyWithoutRegPeriksaInput = {
    create?: XOR<DetailNotaJalanCreateWithoutRegPeriksaInput, DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput> | DetailNotaJalanCreateWithoutRegPeriksaInput[] | DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput[]
    connectOrCreate?: DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput | DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput[]
    createMany?: DetailNotaJalanCreateManyRegPeriksaInputEnvelope
    connect?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
  }

  export type EnumStatusRegPeriksaFieldUpdateOperationsInput = {
    set?: $Enums.StatusRegPeriksa
  }

  export type EnumStatusDaftarFieldUpdateOperationsInput = {
    set?: $Enums.StatusDaftar
  }

  export type EnumStatusLanjutFieldUpdateOperationsInput = {
    set?: $Enums.StatusLanjut
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusUmurFieldUpdateOperationsInput = {
    set?: $Enums.StatusUmur
  }

  export type EnumStatusBayarFieldUpdateOperationsInput = {
    set?: $Enums.StatusBayar
  }

  export type EnumStatusPoliFieldUpdateOperationsInput = {
    set?: $Enums.StatusPoli
  }

  export type DetailNotaJalanUpdateManyWithoutRegPeriksaNestedInput = {
    create?: XOR<DetailNotaJalanCreateWithoutRegPeriksaInput, DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput> | DetailNotaJalanCreateWithoutRegPeriksaInput[] | DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput[]
    connectOrCreate?: DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput | DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput[]
    upsert?: DetailNotaJalanUpsertWithWhereUniqueWithoutRegPeriksaInput | DetailNotaJalanUpsertWithWhereUniqueWithoutRegPeriksaInput[]
    createMany?: DetailNotaJalanCreateManyRegPeriksaInputEnvelope
    set?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    disconnect?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    delete?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    connect?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    update?: DetailNotaJalanUpdateWithWhereUniqueWithoutRegPeriksaInput | DetailNotaJalanUpdateWithWhereUniqueWithoutRegPeriksaInput[]
    updateMany?: DetailNotaJalanUpdateManyWithWhereWithoutRegPeriksaInput | DetailNotaJalanUpdateManyWithWhereWithoutRegPeriksaInput[]
    deleteMany?: DetailNotaJalanScalarWhereInput | DetailNotaJalanScalarWhereInput[]
  }

  export type DetailNotaJalanUncheckedUpdateManyWithoutRegPeriksaNestedInput = {
    create?: XOR<DetailNotaJalanCreateWithoutRegPeriksaInput, DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput> | DetailNotaJalanCreateWithoutRegPeriksaInput[] | DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput[]
    connectOrCreate?: DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput | DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput[]
    upsert?: DetailNotaJalanUpsertWithWhereUniqueWithoutRegPeriksaInput | DetailNotaJalanUpsertWithWhereUniqueWithoutRegPeriksaInput[]
    createMany?: DetailNotaJalanCreateManyRegPeriksaInputEnvelope
    set?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    disconnect?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    delete?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    connect?: DetailNotaJalanWhereUniqueInput | DetailNotaJalanWhereUniqueInput[]
    update?: DetailNotaJalanUpdateWithWhereUniqueWithoutRegPeriksaInput | DetailNotaJalanUpdateWithWhereUniqueWithoutRegPeriksaInput[]
    updateMany?: DetailNotaJalanUpdateManyWithWhereWithoutRegPeriksaInput | DetailNotaJalanUpdateManyWithWhereWithoutRegPeriksaInput[]
    deleteMany?: DetailNotaJalanScalarWhereInput | DetailNotaJalanScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumCaraMasukFilter<$PrismaModel = never> = {
    equals?: $Enums.CaraMasuk | EnumCaraMasukFieldRefInput<$PrismaModel>
    in?: $Enums.CaraMasuk[]
    notIn?: $Enums.CaraMasuk[]
    not?: NestedEnumCaraMasukFilter<$PrismaModel> | $Enums.CaraMasuk
  }

  export type NestedEnumAlatTransportasiFilter<$PrismaModel = never> = {
    equals?: $Enums.AlatTransportasi | EnumAlatTransportasiFieldRefInput<$PrismaModel>
    in?: $Enums.AlatTransportasi[]
    notIn?: $Enums.AlatTransportasi[]
    not?: NestedEnumAlatTransportasiFilter<$PrismaModel> | $Enums.AlatTransportasi
  }

  export type NestedEnumAlasanKedatanganFilter<$PrismaModel = never> = {
    equals?: $Enums.AlasanKedatangan | EnumAlasanKedatanganFieldRefInput<$PrismaModel>
    in?: $Enums.AlasanKedatangan[]
    notIn?: $Enums.AlasanKedatangan[]
    not?: NestedEnumAlasanKedatanganFilter<$PrismaModel> | $Enums.AlasanKedatangan
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCaraMasukWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaraMasuk | EnumCaraMasukFieldRefInput<$PrismaModel>
    in?: $Enums.CaraMasuk[]
    notIn?: $Enums.CaraMasuk[]
    not?: NestedEnumCaraMasukWithAggregatesFilter<$PrismaModel> | $Enums.CaraMasuk
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaraMasukFilter<$PrismaModel>
    _max?: NestedEnumCaraMasukFilter<$PrismaModel>
  }

  export type NestedEnumAlatTransportasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlatTransportasi | EnumAlatTransportasiFieldRefInput<$PrismaModel>
    in?: $Enums.AlatTransportasi[]
    notIn?: $Enums.AlatTransportasi[]
    not?: NestedEnumAlatTransportasiWithAggregatesFilter<$PrismaModel> | $Enums.AlatTransportasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlatTransportasiFilter<$PrismaModel>
    _max?: NestedEnumAlatTransportasiFilter<$PrismaModel>
  }

  export type NestedEnumAlasanKedatanganWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlasanKedatangan | EnumAlasanKedatanganFieldRefInput<$PrismaModel>
    in?: $Enums.AlasanKedatangan[]
    notIn?: $Enums.AlasanKedatangan[]
    not?: NestedEnumAlasanKedatanganWithAggregatesFilter<$PrismaModel> | $Enums.AlasanKedatangan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlasanKedatanganFilter<$PrismaModel>
    _max?: NestedEnumAlasanKedatanganFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[]
    notIn?: $Enums.StatusKamar[]
    not?: NestedEnumStatusKamarFilter<$PrismaModel> | $Enums.StatusKamar
  }

  export type NestedEnumKelasKamarFilter<$PrismaModel = never> = {
    equals?: $Enums.KelasKamar | EnumKelasKamarFieldRefInput<$PrismaModel>
    in?: $Enums.KelasKamar[]
    notIn?: $Enums.KelasKamar[]
    not?: NestedEnumKelasKamarFilter<$PrismaModel> | $Enums.KelasKamar
  }

  export type NestedEnumStatusDataFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusData | EnumStatusDataFieldRefInput<$PrismaModel>
    in?: $Enums.StatusData[]
    notIn?: $Enums.StatusData[]
    not?: NestedEnumStatusDataFilter<$PrismaModel> | $Enums.StatusData
  }

  export type NestedEnumStatusKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKamar | EnumStatusKamarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKamar[]
    notIn?: $Enums.StatusKamar[]
    not?: NestedEnumStatusKamarWithAggregatesFilter<$PrismaModel> | $Enums.StatusKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKamarFilter<$PrismaModel>
    _max?: NestedEnumStatusKamarFilter<$PrismaModel>
  }

  export type NestedEnumKelasKamarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KelasKamar | EnumKelasKamarFieldRefInput<$PrismaModel>
    in?: $Enums.KelasKamar[]
    notIn?: $Enums.KelasKamar[]
    not?: NestedEnumKelasKamarWithAggregatesFilter<$PrismaModel> | $Enums.KelasKamar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKelasKamarFilter<$PrismaModel>
    _max?: NestedEnumKelasKamarFilter<$PrismaModel>
  }

  export type NestedEnumStatusDataWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusData | EnumStatusDataFieldRefInput<$PrismaModel>
    in?: $Enums.StatusData[]
    notIn?: $Enums.StatusData[]
    not?: NestedEnumStatusDataWithAggregatesFilter<$PrismaModel> | $Enums.StatusData
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDataFilter<$PrismaModel>
    _max?: NestedEnumStatusDataFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeriksaLab | EnumStatusPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPeriksaLab[] | null
    notIn?: $Enums.StatusPeriksaLab[] | null
    not?: NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel> | $Enums.StatusPeriksaLab | null
  }

  export type NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriPeriksaLab | EnumKategoriPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.KategoriPeriksaLab[] | null
    notIn?: $Enums.KategoriPeriksaLab[] | null
    not?: NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel> | $Enums.KategoriPeriksaLab | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusPeriksaLabNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPeriksaLab | EnumStatusPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPeriksaLab[] | null
    notIn?: $Enums.StatusPeriksaLab[] | null
    not?: NestedEnumStatusPeriksaLabNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPeriksaLab | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPeriksaLabNullableFilter<$PrismaModel>
  }

  export type NestedEnumKategoriPeriksaLabNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriPeriksaLab | EnumKategoriPeriksaLabFieldRefInput<$PrismaModel> | null
    in?: $Enums.KategoriPeriksaLab[] | null
    notIn?: $Enums.KategoriPeriksaLab[] | null
    not?: NestedEnumKategoriPeriksaLabNullableWithAggregatesFilter<$PrismaModel> | $Enums.KategoriPeriksaLab | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel>
    _max?: NestedEnumKategoriPeriksaLabNullableFilter<$PrismaModel>
  }

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGolDarahNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableFilter<$PrismaModel> | $Enums.GolDarah | null
  }

  export type NestedEnumStatusNikahNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNikah | EnumStatusNikahFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusNikah[] | null
    notIn?: $Enums.StatusNikah[] | null
    not?: NestedEnumStatusNikahNullableFilter<$PrismaModel> | $Enums.StatusNikah | null
  }

  export type NestedEnumStatusPetugasNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPetugas | EnumStatusPetugasFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPetugas[] | null
    notIn?: $Enums.StatusPetugas[] | null
    not?: NestedEnumStatusPetugasNullableFilter<$PrismaModel> | $Enums.StatusPetugas | null
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGolDarahNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableWithAggregatesFilter<$PrismaModel> | $Enums.GolDarah | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGolDarahNullableFilter<$PrismaModel>
    _max?: NestedEnumGolDarahNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusNikahNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNikah | EnumStatusNikahFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusNikah[] | null
    notIn?: $Enums.StatusNikah[] | null
    not?: NestedEnumStatusNikahNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusNikah | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNikahNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNikahNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusPetugasNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPetugas | EnumStatusPetugasFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPetugas[] | null
    notIn?: $Enums.StatusPetugas[] | null
    not?: NestedEnumStatusPetugasNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPetugas | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPetugasNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPetugasNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusRegPeriksaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRegPeriksa | EnumStatusRegPeriksaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRegPeriksa[]
    notIn?: $Enums.StatusRegPeriksa[]
    not?: NestedEnumStatusRegPeriksaFilter<$PrismaModel> | $Enums.StatusRegPeriksa
  }

  export type NestedEnumStatusDaftarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDaftar | EnumStatusDaftarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDaftar[]
    notIn?: $Enums.StatusDaftar[]
    not?: NestedEnumStatusDaftarFilter<$PrismaModel> | $Enums.StatusDaftar
  }

  export type NestedEnumStatusLanjutFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLanjut | EnumStatusLanjutFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLanjut[]
    notIn?: $Enums.StatusLanjut[]
    not?: NestedEnumStatusLanjutFilter<$PrismaModel> | $Enums.StatusLanjut
  }

  export type NestedEnumStatusUmurFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUmur | EnumStatusUmurFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUmur[]
    notIn?: $Enums.StatusUmur[]
    not?: NestedEnumStatusUmurFilter<$PrismaModel> | $Enums.StatusUmur
  }

  export type NestedEnumStatusBayarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBayar | EnumStatusBayarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBayar[]
    notIn?: $Enums.StatusBayar[]
    not?: NestedEnumStatusBayarFilter<$PrismaModel> | $Enums.StatusBayar
  }

  export type NestedEnumStatusPoliFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPoli | EnumStatusPoliFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPoli[]
    notIn?: $Enums.StatusPoli[]
    not?: NestedEnumStatusPoliFilter<$PrismaModel> | $Enums.StatusPoli
  }

  export type NestedEnumStatusRegPeriksaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRegPeriksa | EnumStatusRegPeriksaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRegPeriksa[]
    notIn?: $Enums.StatusRegPeriksa[]
    not?: NestedEnumStatusRegPeriksaWithAggregatesFilter<$PrismaModel> | $Enums.StatusRegPeriksa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRegPeriksaFilter<$PrismaModel>
    _max?: NestedEnumStatusRegPeriksaFilter<$PrismaModel>
  }

  export type NestedEnumStatusDaftarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDaftar | EnumStatusDaftarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDaftar[]
    notIn?: $Enums.StatusDaftar[]
    not?: NestedEnumStatusDaftarWithAggregatesFilter<$PrismaModel> | $Enums.StatusDaftar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDaftarFilter<$PrismaModel>
    _max?: NestedEnumStatusDaftarFilter<$PrismaModel>
  }

  export type NestedEnumStatusLanjutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusLanjut | EnumStatusLanjutFieldRefInput<$PrismaModel>
    in?: $Enums.StatusLanjut[]
    notIn?: $Enums.StatusLanjut[]
    not?: NestedEnumStatusLanjutWithAggregatesFilter<$PrismaModel> | $Enums.StatusLanjut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusLanjutFilter<$PrismaModel>
    _max?: NestedEnumStatusLanjutFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumStatusUmurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUmur | EnumStatusUmurFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUmur[]
    notIn?: $Enums.StatusUmur[]
    not?: NestedEnumStatusUmurWithAggregatesFilter<$PrismaModel> | $Enums.StatusUmur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUmurFilter<$PrismaModel>
    _max?: NestedEnumStatusUmurFilter<$PrismaModel>
  }

  export type NestedEnumStatusBayarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBayar | EnumStatusBayarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBayar[]
    notIn?: $Enums.StatusBayar[]
    not?: NestedEnumStatusBayarWithAggregatesFilter<$PrismaModel> | $Enums.StatusBayar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBayarFilter<$PrismaModel>
    _max?: NestedEnumStatusBayarFilter<$PrismaModel>
  }

  export type NestedEnumStatusPoliWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPoli | EnumStatusPoliFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPoli[]
    notIn?: $Enums.StatusPoli[]
    not?: NestedEnumStatusPoliWithAggregatesFilter<$PrismaModel> | $Enums.StatusPoli
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPoliFilter<$PrismaModel>
    _max?: NestedEnumStatusPoliFilter<$PrismaModel>
  }

  export type RegPeriksaCreateWithoutDetailNotaJalanInput = {
    no_reg: string
    no_rawat: string
    tgl_registrasi: Date | string
    jam_reg: Date | string
    kd_dokter: string
    no_rkm_medis: string
    kd_poli: string
    p_jawab: string
    almt_pj: string
    hubunganpj: string
    biaya_reg: number
    stts: $Enums.StatusRegPeriksa
    stts_daftar: $Enums.StatusDaftar
    status_lanjut: $Enums.StatusLanjut
    kd_pj: string
    umurdaftar: number
    sttsumur: $Enums.StatusUmur
    status_bayar: $Enums.StatusBayar
    status_poli: $Enums.StatusPoli
  }

  export type RegPeriksaUncheckedCreateWithoutDetailNotaJalanInput = {
    no_reg: string
    no_rawat: string
    tgl_registrasi: Date | string
    jam_reg: Date | string
    kd_dokter: string
    no_rkm_medis: string
    kd_poli: string
    p_jawab: string
    almt_pj: string
    hubunganpj: string
    biaya_reg: number
    stts: $Enums.StatusRegPeriksa
    stts_daftar: $Enums.StatusDaftar
    status_lanjut: $Enums.StatusLanjut
    kd_pj: string
    umurdaftar: number
    sttsumur: $Enums.StatusUmur
    status_bayar: $Enums.StatusBayar
    status_poli: $Enums.StatusPoli
  }

  export type RegPeriksaCreateOrConnectWithoutDetailNotaJalanInput = {
    where: RegPeriksaWhereUniqueInput
    create: XOR<RegPeriksaCreateWithoutDetailNotaJalanInput, RegPeriksaUncheckedCreateWithoutDetailNotaJalanInput>
  }

  export type RegPeriksaUpsertWithoutDetailNotaJalanInput = {
    update: XOR<RegPeriksaUpdateWithoutDetailNotaJalanInput, RegPeriksaUncheckedUpdateWithoutDetailNotaJalanInput>
    create: XOR<RegPeriksaCreateWithoutDetailNotaJalanInput, RegPeriksaUncheckedCreateWithoutDetailNotaJalanInput>
    where?: RegPeriksaWhereInput
  }

  export type RegPeriksaUpdateToOneWithWhereWithoutDetailNotaJalanInput = {
    where?: RegPeriksaWhereInput
    data: XOR<RegPeriksaUpdateWithoutDetailNotaJalanInput, RegPeriksaUncheckedUpdateWithoutDetailNotaJalanInput>
  }

  export type RegPeriksaUpdateWithoutDetailNotaJalanInput = {
    no_reg?: StringFieldUpdateOperationsInput | string
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_registrasi?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_reg?: DateTimeFieldUpdateOperationsInput | Date | string
    kd_dokter?: StringFieldUpdateOperationsInput | string
    no_rkm_medis?: StringFieldUpdateOperationsInput | string
    kd_poli?: StringFieldUpdateOperationsInput | string
    p_jawab?: StringFieldUpdateOperationsInput | string
    almt_pj?: StringFieldUpdateOperationsInput | string
    hubunganpj?: StringFieldUpdateOperationsInput | string
    biaya_reg?: FloatFieldUpdateOperationsInput | number
    stts?: EnumStatusRegPeriksaFieldUpdateOperationsInput | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFieldUpdateOperationsInput | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFieldUpdateOperationsInput | $Enums.StatusLanjut
    kd_pj?: StringFieldUpdateOperationsInput | string
    umurdaftar?: IntFieldUpdateOperationsInput | number
    sttsumur?: EnumStatusUmurFieldUpdateOperationsInput | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFieldUpdateOperationsInput | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFieldUpdateOperationsInput | $Enums.StatusPoli
  }

  export type RegPeriksaUncheckedUpdateWithoutDetailNotaJalanInput = {
    no_reg?: StringFieldUpdateOperationsInput | string
    no_rawat?: StringFieldUpdateOperationsInput | string
    tgl_registrasi?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_reg?: DateTimeFieldUpdateOperationsInput | Date | string
    kd_dokter?: StringFieldUpdateOperationsInput | string
    no_rkm_medis?: StringFieldUpdateOperationsInput | string
    kd_poli?: StringFieldUpdateOperationsInput | string
    p_jawab?: StringFieldUpdateOperationsInput | string
    almt_pj?: StringFieldUpdateOperationsInput | string
    hubunganpj?: StringFieldUpdateOperationsInput | string
    biaya_reg?: FloatFieldUpdateOperationsInput | number
    stts?: EnumStatusRegPeriksaFieldUpdateOperationsInput | $Enums.StatusRegPeriksa
    stts_daftar?: EnumStatusDaftarFieldUpdateOperationsInput | $Enums.StatusDaftar
    status_lanjut?: EnumStatusLanjutFieldUpdateOperationsInput | $Enums.StatusLanjut
    kd_pj?: StringFieldUpdateOperationsInput | string
    umurdaftar?: IntFieldUpdateOperationsInput | number
    sttsumur?: EnumStatusUmurFieldUpdateOperationsInput | $Enums.StatusUmur
    status_bayar?: EnumStatusBayarFieldUpdateOperationsInput | $Enums.StatusBayar
    status_poli?: EnumStatusPoliFieldUpdateOperationsInput | $Enums.StatusPoli
  }

  export type DetailNotaJalanCreateWithoutRegPeriksaInput = {
    namaBayar: string
    besarppn: number
    besarBayar: number
  }

  export type DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput = {
    namaBayar: string
    besarppn: number
    besarBayar: number
  }

  export type DetailNotaJalanCreateOrConnectWithoutRegPeriksaInput = {
    where: DetailNotaJalanWhereUniqueInput
    create: XOR<DetailNotaJalanCreateWithoutRegPeriksaInput, DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput>
  }

  export type DetailNotaJalanCreateManyRegPeriksaInputEnvelope = {
    data: DetailNotaJalanCreateManyRegPeriksaInput | DetailNotaJalanCreateManyRegPeriksaInput[]
    skipDuplicates?: boolean
  }

  export type DetailNotaJalanUpsertWithWhereUniqueWithoutRegPeriksaInput = {
    where: DetailNotaJalanWhereUniqueInput
    update: XOR<DetailNotaJalanUpdateWithoutRegPeriksaInput, DetailNotaJalanUncheckedUpdateWithoutRegPeriksaInput>
    create: XOR<DetailNotaJalanCreateWithoutRegPeriksaInput, DetailNotaJalanUncheckedCreateWithoutRegPeriksaInput>
  }

  export type DetailNotaJalanUpdateWithWhereUniqueWithoutRegPeriksaInput = {
    where: DetailNotaJalanWhereUniqueInput
    data: XOR<DetailNotaJalanUpdateWithoutRegPeriksaInput, DetailNotaJalanUncheckedUpdateWithoutRegPeriksaInput>
  }

  export type DetailNotaJalanUpdateManyWithWhereWithoutRegPeriksaInput = {
    where: DetailNotaJalanScalarWhereInput
    data: XOR<DetailNotaJalanUpdateManyMutationInput, DetailNotaJalanUncheckedUpdateManyWithoutRegPeriksaInput>
  }

  export type DetailNotaJalanScalarWhereInput = {
    AND?: DetailNotaJalanScalarWhereInput | DetailNotaJalanScalarWhereInput[]
    OR?: DetailNotaJalanScalarWhereInput[]
    NOT?: DetailNotaJalanScalarWhereInput | DetailNotaJalanScalarWhereInput[]
    noRawat?: StringFilter<"DetailNotaJalan"> | string
    namaBayar?: StringFilter<"DetailNotaJalan"> | string
    besarppn?: FloatFilter<"DetailNotaJalan"> | number
    besarBayar?: FloatFilter<"DetailNotaJalan"> | number
  }

  export type DetailNotaJalanCreateManyRegPeriksaInput = {
    namaBayar: string
    besarppn: number
    besarBayar: number
  }

  export type DetailNotaJalanUpdateWithoutRegPeriksaInput = {
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailNotaJalanUncheckedUpdateWithoutRegPeriksaInput = {
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailNotaJalanUncheckedUpdateManyWithoutRegPeriksaInput = {
    namaBayar?: StringFieldUpdateOperationsInput | string
    besarppn?: FloatFieldUpdateOperationsInput | number
    besarBayar?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
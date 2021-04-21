// import reg_1 from "./flags/1.svg"
// import reg_2 from "./flags/2.svg"
// import reg_3 from "./flags/3.svg"
// import reg_4 from "./flags/4.svg"
// import reg_5 from "./flags/5.svg"
// import reg_6 from "./flags/6.svg"
// import reg_7 from "./flags/7.svg"
// import reg_8 from "./flags/8.svg"
// import reg_9 from "./flags/9.svg"
// import reg_10 from "./flags/10.svg"
// import reg_11 from "./flags/11.svg"
// import reg_12 from "./flags/12.svg"
// import reg_13 from "./flags/13.svg"
// import reg_14 from "./flags/14.svg"
// import reg_15 from "./flags/15.svg"
// import reg_16 from "./flags/16.svg"
// import reg_17 from "./flags/17.svg"
// import reg_18 from "./flags/18.svg"
// import reg_19 from "./flags/19.svg"
// import reg_20 from "./flags/20.svg"
// import reg_21 from "./flags/21.svg"
// import reg_22 from "./flags/22.svg"
// import reg_23 from "./flags/23.svg"
// import reg_24 from "./flags/24.svg"
// import reg_25 from "./flags/25.svg"
// import reg_26 from "./flags/26.svg"
// import reg_27 from "./flags/27.svg"
// import reg_28 from "./flags/28.svg"
// import reg_29 from "./flags/29.svg"
// import reg_30 from "./flags/30.svg"
// import reg_31 from "./flags/31.svg"
// import reg_32 from "./flags/32.svg"
// import reg_33 from "./flags/33.svg"
// import reg_34 from "./flags/34.svg"
// import reg_35 from "./flags/35.svg"
// import reg_36 from "./flags/36.svg"
// import reg_37 from "./flags/37.svg"
// import reg_38 from "./flags/38.svg"
// import reg_39 from "./flags/39.svg"
// import reg_40 from "./flags/40.svg"
// import reg_41 from "./flags/41.svg"
// import reg_42 from "./flags/42.svg"
// import reg_43 from "./flags/43.svg"
// import reg_44 from "./flags/44.svg"
// import reg_45 from "./flags/45.svg"
// import reg_46 from "./flags/46.svg"
// import reg_47 from "./flags/47.svg"
// import reg_48 from "./flags/48.svg"
// import reg_49 from "./flags/49.svg"
// import reg_50 from "./flags/50.svg"
// import reg_51 from "./flags/51.svg"
// import reg_52 from "./flags/52.svg"
// import reg_53 from "./flags/53.svg"
// import reg_54 from "./flags/54.svg"
// import reg_55 from "./flags/55.svg"
// import reg_56 from "./flags/56.svg"
// import reg_57 from "./flags/57.svg"
// import reg_58 from "./flags/58.svg"
// import reg_59 from "./flags/59.svg"
// import reg_60 from "./flags/60.svg"
// import reg_61 from "./flags/61.svg"
// import reg_62 from "./flags/62.svg"
// import reg_63 from "./flags/63.svg"
// import reg_64 from "./flags/64.svg"
// import reg_65 from "./flags/65.svg"
// import reg_66 from "./flags/66.svg"
// import reg_67 from "./flags/67.svg"
// import reg_68 from "./flags/68.svg"
// import reg_69 from "./flags/69.svg"
// import reg_70 from "./flags/70.svg"
// import reg_71 from "./flags/71.svg"
// import reg_72 from "./flags/72.svg"
// import reg_73 from "./flags/73.svg"
// import reg_74 from "./flags/74.svg"
// import reg_75 from "./flags/75.svg"
// import reg_76 from "./flags/76.svg"
// import reg_77 from "./flags/77.svg"
// import reg_78 from "./flags/78.svg"
// import reg_79 from "./flags/79.svg"
// import reg_83 from "./flags/83.svg"
// import reg_86 from "./flags/86.svg"
// import reg_87 from "./flags/87.svg"
// import reg_89 from "./flags/89.svg"
// import reg_91 from "./flags/91.svg"
// import reg_92 from "./flags/92.svg"
//
// export {
//     reg_1,
//     reg_2,
//     reg_3,
//     reg_4,
//     reg_5,
//     reg_6,
//     reg_7,
//     reg_8,
//     reg_9,
//     reg_10,
//     reg_11,
//     reg_12,
//     reg_13,
//     reg_14,
//     reg_15,
//     reg_16,
//     reg_17,
//     reg_18,
//     reg_19,
//     reg_20,
//     reg_21,
//     reg_22,
//     reg_23,
//     reg_24,
//     reg_25,
//     reg_26,
//     reg_27,
//     reg_28,
//     reg_29,
//     reg_30,
//     reg_31,
//     reg_32,
//     reg_33,
//     reg_34,
//     reg_35,
//     reg_36,
//     reg_37,
//     reg_38,
//     reg_39,
//     reg_40,
//     reg_41,
//     reg_42,
//     reg_43,
//     reg_44,
//     reg_45,
//     reg_46,
//     reg_47,
//     reg_48,
//     reg_49,
//     reg_50,
//     reg_51,
//     reg_52,
//     reg_53,
//     reg_54,
//     reg_55,
//     reg_56,
//     reg_57,
//     reg_58,
//     reg_59,
//     reg_60,
//     reg_61,
//     reg_62,
//     reg_63,
//     reg_64,
//     reg_65,
//     reg_66,
//     reg_67,
//     reg_68,
//     reg_69,
//     reg_70,
//     reg_71,
//     reg_72,
//     reg_73,
//     reg_74,
//     reg_75,
//     reg_76,
//     reg_77,
//     reg_78,
//     reg_79,
//     reg_83,
//     reg_86,
//     reg_87,
//     reg_89,
//     reg_91,
//     reg_92
// }

function  importAll(r){
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '').replace('.svg','')] = r(item); });
    // images.map(item => item = item.replace('svg', '')  )
    return images;
}

export default importAll(require.context("./flags/",false,/\.(png|jpe?g|svg)$/))

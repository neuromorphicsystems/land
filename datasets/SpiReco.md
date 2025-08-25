---
{
    "name": "SpiReco",
    "aliases": [
        "S-MNIST",
        "S-CIFAR",
        "S-CALTECH"
    ],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Monitor Conversion",
        "E-Ink Conversion",
        "High-speed Recognition"
    ],
    "description": "High speed object recognition",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 13.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "SpiReco: Fast and Efficient Recognition of High-Speed Moving Objects With Spike Camera",
        "doi": "10.1109/tcsvt.2023.3272375",
        "authors": [
            "Junwei Zhao",
            "Shiliang Zhang",
            "Zhaofei Yu",
            "Tiejun Huang"
        ],
        "abstract": "Benefited from the high temporal resolution and high dynamic range, spike cameras have shown great potential in recognizing high-speed moving objects. However, the computer vision community has not explored this task due to the lack of spike data and annotations of high-speed moving objects. This paper contributes a novel dataset, named SpiReco (Spiking datasets for Recognition), by recording high-speed moving objects using a spike camera. To annotate the dataset, image labels from established datasets such as MNIST, CIFAR10, and CALTECH101 are utilized. Based on this new dataset, this paper proposes the first spike-based object recognition framework. The proposed framework includes a denoise module, which is designed to suppress spike noise by learning spatio-temporal correlation from neighbouring pixels. Additionally, a motion enhancement module is introduced to address high-speed and random motions. Afterwards, binarized neural networks are adopted to save computation costs. These efforts result in a fast and efficient processing framework for spiking data. Experimental results demonstrate the effectiveness of the proposed methods. For example, the proposed spike-based recognition framework achieves 80.2% accuracy in recognizing 101 classes of high-speed moving objects using only 2.2ms of spike streams. The SpiReco is available at https://github.com/Evin-X/SpiReco .",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2025-06-22T12:56:00.392007"
        },
        {
            "source": "scholar",
            "count": 12,
            "updated": "2025-06-22T12:55:59.547706"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10114387"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Evin-X/SpiReco"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "5856--5867",
        "year": 2024,
        "month": "jul",
        "author": "Zhao, Junwei and Zhang, Shiliang and Yu, Zhaofei and Huang, Tiejun",
        "journal": "IEEE Transactions on Circuits and Systems for Video Technology",
        "urldate": "2024-12-04",
        "number": "7",
        "language": "en",
        "doi": "10.1109/TCSVT.2023.3272375",
        "url": "https://ieeexplore.ieee.org/document/10114387/",
        "shorttitle": "{SpiReco}",
        "issn": "1051-8215, 1558-2205",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "34",
        "title": "{SpiReco}: {Fast} and {Efficient} {Recognition} of {High}-{Speed} {Moving} {Objects} {With} {Spike} {Camera}",
        "type": "article",
        "key": "zhao_spireco_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TCSVT.2015.2412831",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3082635",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01400",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2017.2682196",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2864148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2019.2894161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3034233",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00099",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_13",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2022.3142771",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00462",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2841516",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2022.3202659",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eng.2022.01.012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2020.3034649",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3130147",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2020.3032014",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i2.20021",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP43922.2022.9747018",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3237856",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01732",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00151",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2021.726582",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00097",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3073673",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00124",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58565-5_9",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.11317",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-019-1424-8",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2018.12.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01212",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i02.5486",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.3040969",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i12.17320",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.05.002",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_37",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2019.09.005",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2022.12.017",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2017.2761740",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46493-0_32",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.09.016",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3077136",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00253",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00953",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58568-6_9",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01227-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV56688.2023.00636",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACVW54805.2022.00052",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i3.16306",
            "source": "crossref"
        },
        {
            "title": "Temporal efficient training of spiking neural network via gradient re-weighting",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 3 datasets:
  - S-MNIST - 4.3 Gb
  - S-CIFAR - 4.8 Gb
  - S-CALTECH - 4.1 Gb
-

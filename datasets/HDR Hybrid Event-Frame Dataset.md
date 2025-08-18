---
{
    "name": "HDR Hybrid Event-Frame Dataset",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [
        "FLIR Chameleon 3"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "HDR Video Reconstruction"
    ],
    "task": "Frame/Event fusion (HDR and high temporal imaging)",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1JYdvY2GqgD3RC-rczgf8t1JoIuBqoJvp",
                "format": "Matlab",
                "available": false
            }
        ],
        "size_gb": 4.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "An Asynchronous Linear Filter Architecture for Hybrid Event-Frame Cameras",
        "doi": "10.1109/TPAMI.2023.3311534",
        "authors": [
            "Ziwei Wang",
            "Yonhon Ng",
            "Cedric Scheerlinck",
            "Robert Mahony"
        ],
        "abstract": "Event cameras are ideally suited to capture High Dynamic Range (HDR) visual information without blur but provide poor imaging capability for static or slowly varying scenes. Conversely, conventional image sensors measure absolute intensity of slowly changing scenes effectively but do poorly on HDR or quickly changing scenes. In this paper, we present an asynchronous linear \ufb01lter architecture, fusing event and frame camera data, for HDR video reconstruction and spatial convolution that exploits the advantages of both sensor modalities. The key idea is the introduction of a state that directly encodes the integrated or convolved image information and that is updated asynchronously as each event or each frame arrives from the camera. The state can be read-off as-often-as and whenever required to feed into subsequent vision modules for real-time robotic systems. Our experimental results are evaluated on both publicly available datasets with challenging lighting conditions and fast motions, along with a new dataset with HDR reference that we provide. The proposed AKF pipeline outperforms other state-of-the-art methods in both absolute intensity error (69.4\\% reduction) and image similarity indexes (average 35.5\\% improvement). We also demonstrate the integration of image convolution with linear spatial kernels Gaussian, Sobel, and Laplacian as an application of our architecture.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-06-21T13:18:03.384236"
        },
        {
            "source": "scholar",
            "count": 7,
            "updated": "2025-06-21T13:18:02.362763"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2309.01159"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10238826"
        },
        {
            "type": "github_page",
            "url": "https://github.com/ziweiWWANG/Event-Asynchronous-Filter"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "695--711",
        "year": 2024,
        "month": "feb",
        "author": "Wang, Ziwei and Ng, Yonhon and Scheerlinck, Cedric and Mahony, Robert",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-04-13",
        "number": "2",
        "language": "en",
        "doi": "10.1109/TPAMI.2023.3311534",
        "url": "https://ieeexplore.ieee.org/document/10238826/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "46",
        "title": "An {Asynchronous} {Linear} {Filter} {Architecture} for {Hybrid} {Event}-{Frame} {Cameras}",
        "type": "article",
        "key": "wang_asynchronous_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636312",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58523-5_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00070",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00050",
            "source": "crossref"
        },
        {
            "doi": "10.1115/1.3662552",
            "source": "crossref"
        },
        {
            "doi": "10.1115/1.3658902",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2893427",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-30642-7_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS47612.2022.9982016",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9812003",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-25056-9_5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JEI.28.6.063012",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00371-017-1372-y",
            "source": "crossref"
        },
        {
            "doi": "10.5220/0008934700370047",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00532",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2017.2671921",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3072959.3073609",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SIPROCESS.2018.8600514",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2018.8451138",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2019.2896551",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2011.2167409",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2347355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2017.2661702",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2018.8351312",
            "source": "crossref"
        },
        {
            "doi": "10.1109/81.788808",
            "source": "crossref"
        },
        {
            "doi": "10.1111/j.1467-8659.2008.01167.x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2003.1211522",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.1557695",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAES.1975.308081",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAC.2008.923738",
            "source": "crossref"
        },
        {
            "doi": "10.1201/9781420035339",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JEI.24.1.010501",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2005.31",
            "source": "crossref"
        },
        {
            "doi": "10.1007/11744023_45",
            "source": "crossref"
        },
        {
            "title": "Event camera calibration of per-pixel biased contrast threshold",
            "source": "crossref"
        },
        {
            "title": "Extended intensity range imaging",
            "source": "crossref"
        },
        {
            "title": "Contributions to the theory of optimal control",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure
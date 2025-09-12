---
{
    "name": "HUE Dataset",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "FLIR Chameleon 3 Color"
    ],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Detection",
        "Low Light",
        "Beamsplitters"
    ],
    "description": "Low-light Object Detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Dataset is available through Zenodo, split into multiple parts, each uploaded separately. ",
        "dataset_links": [
            {
                "name": "HUE-City Part 1",
                "url": "https://zenodo.org/records/13850671",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-City Part 2",
                "url": "https://zenodo.org/records/13882992",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-City Controlled",
                "url": "https://zenodo.org/records/13850789",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Driving Part 1",
                "url": "https://zenodo.org/records/13850768",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Driving Part 2",
                "url": "https://zenodo.org/records/13883000",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Indoor Part 1",
                "url": "https://zenodo.org/records/13850606",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Indoor Part 2",
                "url": "https://zenodo.org/records/13883010",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Indoor Part 3",
                "url": "https://zenodo.org/records/13883013",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Night",
                "url": "https://zenodo.org/records/13850750",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Twilight Part 1",
                "url": "https://zenodo.org/records/13850716",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Twilight Part 2",
                "url": "https://zenodo.org/records/13883017",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Twilight Part 3",
                "url": "https://zenodo.org/records/13883020",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "HUE-Twilight Part 4",
                "url": "https://zenodo.org/records/13883029",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 441.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "HUE Dataset: High-Resolution Event and\u00a0Frame Sequences for\u00a0Low-Light Vision",
        "doi": "10.1007/978-3-031-92460-6_11",
        "authors": [
            "Burak Ercan",
            "Onur Eker",
            "Aykut Erdem",
            "Erkut Erdem"
        ],
        "abstract": "Low-light environments pose significant challenges for image enhancement methods. To address these challenges, in this work, we introduce the HUE dataset, a comprehensive collection of high-resolution event and frame sequences captured in diverse and challenging low-light conditions. Our dataset includes 106 sequences, encompassing indoor, cityscape, twilight, night, driving, and controlled scenarios, each carefully recorded to address various illumination levels and dynamic ranges. Utilizing a hybrid RGB and event camera setup. We collect a dataset that combines high-resolution event data with complementary frame data. We employ both qualitative and quantitative evaluations using no-reference metrics to assess state-of-the-art low-light enhancement and event-based image reconstruction methods. Additionally, we evaluate these methods on a downstream object detection task. Our findings reveal that while event-based methods perform well in specific metrics, they may produce false positives in practical applications. This dataset and our comprehensive analysis provide valuable insights for future research in low-light vision and hybrid camera systems.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-12T11:50:23.874404"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-09-12T11:50:25.422145"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2410.19164"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-92460-6_11"
        },
        {
            "type": "project_page",
            "url": "https://ercanburak.github.io/HUE.html"
        }
    ],
    "full_name": "Hacettepe University Event (HUE)",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1109/TIP.2009.2021548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.431",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00328",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00410",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2024.3372460",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01183",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2016.2639450",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCE.2007.4429280",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00742",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3290432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/83.557356",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00510",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.00011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00974",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25257",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2016.06.008",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2012.2214050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2012.2227726",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VBC.1990.109340",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0734-189X(87)80186-X",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2024.3386032",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9560881",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00721",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2014.2324813",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2013.2261309",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS51168.2021.9636312",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2024.3355648",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01719",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00126",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.engappai.2023.106838",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00493",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58523-5_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "174\u2013191",
        "year": 2025,
        "author": "Ercan, Burak and Eker, Onur and Erdem, Aykut and Erdem, Erkut",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer Vision \u2013 ECCV 2024 Workshops",
        "doi": "10.1007/978-3-031-92460-6_11",
        "url": "http://dx.doi.org/10.1007/978-3-031-92460-6_11",
        "issn": "1611-3349",
        "isbn": "9783031924606",
        "title": "HUE Dataset: High-Resolution Event and\u00a0Frame Sequences for\u00a0Low-Light Vision",
        "type": "book",
        "key": "Ercan_2025"
    }
}
---

# Dataset Structure:

HUE-City Part 1: 33 Gb (https://doi.org/10.5281/zenodo.13850671)
HUE-City Part 2: 24 Gb (https://doi.org/10.5281/zenodo.13882992)

HUE-City Controlled: 11.2 Gb (https://doi.org/10.5281/zenodo.13850789)

HUE-Driving Part 1: 41 Gb (https://doi.org/10.5281/zenodo.13850768)
HUE-Driving Part 2: 17.8 Gb (https://doi.org/10.5281/zenodo.13883000)

HUE-Indoor Part 1: 45.5 Gb (https://doi.org/10.5281/zenodo.13850606)
HUE-Indoor Part 2: 39.3 Gb (https://doi.org/10.5281/zenodo.13883010)
HUE-Indoor Part 3: 36.4 Gb (https://doi.org/10.5281/zenodo.13883013)

HUE-Night: 18.1 Gb (https://doi.org/10.5281/zenodo.13850750)

HUE-Twilight Part 1: 48.3 Gb (https://doi.org/10.5281/zenodo.13850716)
HUE-Twilight Part 2: 46.6 Gb (https://doi.org/10.5281/zenodo.13883017)
HUE-Twilight Part 3: 45.5 Gb (https://doi.org/10.5281/zenodo.13883020)
HUE-Twilight Part 4: 34.5 Gb (https://doi.org/10.5281/zenodo.13883029)
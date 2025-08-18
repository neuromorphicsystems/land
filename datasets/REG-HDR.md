---
{
    "name": "REG-HDR",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "FLIRBFS-U3-63S4C",
        "BITRAN CS-700C"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Beamsplitters",
        "De-blurring",
        "HDR Video Reconstruction"
    ],
    "task": "Video frame interpolation",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Event-guided Frame Interpolation and Dynamic Range Expansion of Single Rolling Shutter Image",
        "doi": "10.1145/3581783.3612093",
        "authors": [
            "Guixu Lin",
            "Jin Han",
            "Mingdeng Cao",
            "Zhihang Zhong",
            "Yinqiang Zheng"
        ],
        "abstract": "In the presence of abrupt motion, the pushbroom scanning mechanism of a rolling shutter (RS) camera tends to bring undesirable distortion, which is recently shown to be beneficial for high-speed frame interpolation. Although promising results have been reported by using multiple consecutive RS frames, to interpolate intermediate distortion-free frames from a single RS image is still an open question, due to the existence of multiple motions that can account for the recorded distortion. Another limitation of RS cameras in complex dynamic scenarios lies in the dynamic range, since traditional ways of multiple exposure for high dynamic range (HDR) imaging will fail due to alignment issues. To deal with these two challenges simultaneously, we propose to use an event camera for assistance, which has much faster temporal response and wider dynamic range. Since there does not exist learning data for this brand new imaging setup, we first build a quad-axis imaging system to capture a realistic dataset called REG-HDR, with pairs of fully aligned RS image and its associated events, as well as their corresponding high-speed HDR GS images. We also propose a flow-based network for frame interpolation, compounded with an attention-based fusion network for dynamic range expansion. Experimental results have verified the effectiveness of our proposed algorithm and the superiority of using realistic data for this challenging dural-purpose enhancement task.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2025-06-21T17:33:09.062619"
        },
        {
            "source": "scholar",
            "count": 8,
            "updated": "2025-06-21T17:33:08.234142"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/abs/10.1145/3581783.3612093"
        }
    ],
    "full_name": "RS & Event & GS HDR (REG-HDR)",
    "additional_metadata": {
        "num_recordings": "4200",
        "stereo": false
    },
    "bibtex": {
        "pages": "3078--3088",
        "year": 2023,
        "month": "oct",
        "author": "Lin, Guixu and Han, Jin and Cao, Mingdeng and Zhong, Zhihang and Zheng, Yinqiang",
        "publisher": "ACM",
        "booktitle": "Proceedings of the 31st {ACM} {International} {Conference} on {Multimedia}",
        "urldate": "2024-12-23",
        "language": "en",
        "doi": "10.1145/3581783.3612093",
        "url": "https://dl.acm.org/doi/10.1145/3581783.3612093",
        "isbn": "9798400701085",
        "title": "Event-guided {Frame} {Interpolation} and {Dynamic} {Range} {Expansion} of {Single} {Rolling} {Shutter} {Image}",
        "address": "Ottawa ON Canada",
        "type": "inproceedings",
        "key": "lin_event-guided_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TMM.2022.3199556",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00450",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01705",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3231334",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00484",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00745",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_43",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00598",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01931",
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
            "doi": "10.1109/CVPR.2017.252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00765",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00910",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01725",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure
- Contains 4200 sequences
-
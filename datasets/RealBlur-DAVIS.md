---
{
    "name": "RealBlur-DAVIS",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "tags": [
        "De-blurring"
    ],
    "description": "Image de-blurring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Other"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Other",
                "url": "https://rec.ustc.edu.cn/share/421c2a20-0fd3-11ee-bf10-0bc6e486a7d3",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 113.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Event-based Blurry Frame Interpolation under Blind Exposure",
        "doi": "10.1109/CVPR52729.2023.00159",
        "authors": [
            "Wenming Weng",
            "Yueyi Zhang",
            "Zhiwei Xiong"
        ],
        "abstract": "Restoring sharp high frame-rate videos from low frame-rate blurry videos is a challenging problem. Existing blurry frame interpolation methods assume a predefined and known exposure time, which suffer from severe performance drop when applied to videos captured in the wild. In this paper, we study the problem of blurry frame interpolation under blind exposure with the assistance of an event camera. The high temporal resolution of the event camera is beneficial to obtain the exposure prior that is lost during the imaging process. Besides, sharp frames can be restored using event streams and blurry frames relying on the mutual constraint among them. Therefore, we first propose an exposure estimation strategy guided by event streams to estimate the lost exposure prior, transforming the blind exposure problem well-posed. Second, we propose to model the mutual constraint with a temporal-exposure control strategy through iterative residual learning. Our blurry frame interpolation method achieves a distinct performance boost over existing methods on both synthetic and self-collected real- world datasets under blind exposure.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 10,
            "updated": "2025-06-08T13:46:47.767690"
        },
        {
            "source": "scholar",
            "count": 18,
            "updated": "2025-06-08T13:46:46.936420"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/papers/Weng_Event-Based_Blurry_Frame_Interpolation_Under_Blind_Exposure_CVPR_2023_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10204045"
        },
        {
            "type": "github_page",
            "url": "https://github.com/WarranWeng/EBFI-BE"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1588--1598",
        "year": 2023,
        "month": "jun",
        "author": "Weng, Wenming and Zhang, Yueyi and Xiong, Zhiwei",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-20",
        "language": "en",
        "doi": "10.1109/CVPR52729.2023.00159",
        "url": "https://ieeexplore.ieee.org/document/10204045/",
        "isbn": "9798350301298",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-based {Blurry} {Frame} {Interpolation} under {Blind} {Exposure}",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "Weng2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV48922.2021.00484",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.100",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01131",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00424",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00853",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00170",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00975",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00516",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00331",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00329",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298720",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00351",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00183",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00829",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00257",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12276",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00382",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SYSMART.2016.7894491",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.37",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00344",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00201",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00830",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00536",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00854",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2015.2425886",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20068-7_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCI.2022.3228747",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "title": "Unsuper-vised degradation representation learning for blind superresolution",
            "source": "crossref"
        },
        {
            "title": "Event enhanced high-quality image recovery",
            "source": "crossref"
        },
        {
            "title": "Interactive multidimension modulation with dynamic controllable residual learning for image restoration",
            "source": "crossref"
        },
        {
            "title": "Event-guided deblurring of unknown exposure time videos",
            "source": "crossref"
        },
        {
            "title": "Time lens++: Event-based frame interpolation with paramet-ric non-linear flow and multi-scale fusion",
            "source": "crossref"
        },
        {
            "title": "Single image haze removal using dark channel prior",
            "source": "crossref"
        },
        {
            "title": "Generalized video de-blurring for dynamic scenes",
            "source": "crossref"
        },
        {
            "title": "Video interpolation by event-driven anisotropic adjustment of optical flow",
            "source": "crossref"
        },
        {
            "title": "Automatic differentiation in pytorch",
            "source": "crossref"
        },
        {
            "title": "Non-parametric local transforms for computing visual correspondence",
            "source": "crossref"
        },
        {
            "title": "Meta-transfer learning for zero-shot super-resolution",
            "source": "crossref"
        },
        {
            "title": "Deepstereo: Learning to predict new views from the world's imagery",
            "source": "crossref"
        },
        {
            "title": "A simple framework for contrastive learning of visual representations",
            "source": "crossref"
        },
        {
            "title": "Blind super-resolution kernel estimation using an internal-gan",
            "source": "crossref"
        },
        {
            "title": "Discriminative unsupervised feature learning with convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Video frame interpolation via adaptive convolution",
            "source": "crossref"
        },
        {
            "title": "Efficient spatio-temporal recurrent neural network for video deblurring",
            "source": "crossref"
        },
        {
            "title": "Phase-based frame inter-polation for video",
            "source": "crossref"
        },
        {
            "title": "Blur-invariant deep learning for blind-deblurring",
            "source": "crossref"
        },
        {
            "title": "Video frame interpolation without temporal priors",
            "source": "crossref"
        },
        {
            "title": "Quadratic video interpolation",
            "source": "crossref"
        },
        {
            "title": "Online video deblurring via dynamic tem-poral blending network",
            "source": "crossref"
        },
        {
            "title": "Video compression through image interpolation",
            "source": "crossref"
        },
        {
            "title": "Group normalization",
            "source": "crossref"
        },
        {
            "title": "Learning event-driven video deblurring and interpolation",
            "source": "crossref"
        },
        {
            "title": "Event-based fusion for motion deblurring with cross-modal attention",
            "source": "crossref"
        },
        {
            "title": "Enhanced quadratic video interpolation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

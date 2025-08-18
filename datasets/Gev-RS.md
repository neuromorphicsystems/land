---
{
    "name": "Gev-RS",
    "aliases": [
        "EvUnroll"
    ],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Shutter Control",
        "Beamsplitters"
    ],
    "task": "Rolling shutter correction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1_tZxJBeLaznrI0UomsPh9A?pwd=evun",
                "format": "Numpy",
                "available": true
            }
        ]
    },
    "paper": {
        "title": "EvUnroll: Neuromorphic Events based Rolling Shutter Image Correction",
        "doi": "10.1109/CVPR52688.2022.01725",
        "authors": [
            "Xinyu Zhou",
            "Peiqi Duan",
            "Yi Ma",
            "Boxin Shi"
        ],
        "abstract": "This paper proposes to use neuromorphic events for correcting rolling shutter (RS) images as consecutive global shutter (GS) frames. RS effect introduces edge distortion and region occlusion into images caused by row-wise read-out of CMOS sensors. We introduce a novel computational imaging setup consisting of an RS sensor and an event sensor, and propose a neural network called EvUnroll to solve this problem by exploring the high-temporal-resolution property of events. We use events to bridge a spatio-temporal connection between RS and GS, establish a flow estimation module to correct edge distortions, and design a synthesis-based restoration module to restore occluded regions. The results of two branches are fused through a refining module to generate corrected GS images. We further propose datasets captured by a high-speed camera and an RS-Event hybrid camera system for training and testing our network. Experimental results on both public and proposed datasets show a systematic performance improvement compared to state-of-the-art methods.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 24,
            "updated": "2025-06-27T06:50:54.402917"
        },
        {
            "source": "scholar",
            "count": 37,
            "updated": "2025-06-27T06:50:53.489101"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/papers/Zhou_EvUnroll_Neuromorphic_Events_Based_Rolling_Shutter_Image_Correction_CVPR_2022_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10480243"
        },
        {
            "type": "github_page",
            "url": "https://github.com/zxyemo/EvUnroll"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "17754--17763",
        "year": 2022,
        "month": "jun",
        "author": "Zhou, Xinyu and Duan, Peiqi and Ma, Yi and Shi, Boxin",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.01725",
        "url": "https://ieeexplore.ieee.org/document/9880302/",
        "shorttitle": "{EvUnroll}",
        "isbn": "978-1-66546-946-3",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{EvUnroll}: {Neuromorphic} {Events} based {Rolling} {Shutter} {Image} {Correction}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "zhou_evunroll_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV.2017.101",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2018.00104",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00183",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00284",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01427",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299155",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2461912.2461995",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCE.2007.4341576",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2018.2865304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2977644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00504",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2008.925384",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00207",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00598",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00910",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2005.06.042",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPhot.2012.6215213",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00484",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6247831",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.831203",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.408",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3113344",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00450",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00073",
            "source": "crossref"
        },
        {
            "doi": "10.1145/358669.358692",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.252",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.303",
            "source": "crossref"
        },
        {
            "title": "Attention U-Net: Learning where to look for the pancreas",
            "source": "crossref"
        },
        {
            "title": "Going unconstrained with rolling shutter de-blurring",
            "source": "crossref"
        },
        {
            "title": "Bringing a blurry frame alive at high framerate with an event camera",
            "source": "crossref"
        },
        {
            "title": "Geometric models of rolling-shutter cameras",
            "source": "crossref"
        },
        {
            "title": "Efficient spatio-temporal recurrent neural network for video deblurring",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Perceptual losses for real-time style transfer and super-resolution",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "V2E: From video frames to realistic DVS event camera streams",
            "source": "crossref"
        },
        {
            "title": "Learning to super resolve intensity images from events",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "U-Net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 
- Contains both simulated data converted from a high-speed camera using v2e and real data captured with a Prophesee Gen4 sensor
-
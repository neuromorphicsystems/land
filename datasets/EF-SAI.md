---
{
    "name": "EF-SAI",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Synthetic Aperture Imaging"
    ],
    "description": "Synthetic Aperture Imaging",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/u/s!AhglJgt1Cr16pXLLwDzp7rnbGMdS?e=hI6okp",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 5.76,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Synthetic Aperture Imaging with Events and Frames",
        "doi": "10.1109/CVPR52688.2022.01721",
        "authors": [
            "Wei Liao",
            "Xiang Zhang",
            "Lei Yu",
            "Shijie Lin",
            "Wen Yang",
            "Ning Qiao"
        ],
        "abstract": "The Event-based Synthetic Aperture Imaging (E-SAI) has recently been proposed to see through extremely dense occlusions. However, the performance of E-SAI is not consistent under sparse occlusions due to the dramatic de-crease of signal events. This paper addresses this problem by leveraging the merits of both events and frames, leading to a fusion-based SAl (EF-SAI) that performs consistently under the different densities of occlusions. In particular, we first extract the feature from events and frames via multi-modal feature encoders and then apply a multi-stage fusion network for cross-modal enhancement and density-aware feature selection. Finally, a CNN decoder is employed to generate occlusion-free visual images from selected features. Extensive experiments show that our method effectively tackles varying densities of occlusions and achieves superior performance to the state-of-the-art SAl methods. Codes and datasets are available at https://github.com/smjsc/EF-SAI",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 8,
            "updated": "2025-06-13T11:58:54.490376"
        },
        {
            "source": "scholar",
            "count": 17,
            "updated": "2025-06-13T11:58:53.818223"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Liao_Synthetic_Aperture_Imaging_With_Events_and_Frames_CVPR_2022_paper.html"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9878722"
        },
        {
            "type": "github_page",
            "url": "https://github.com/smjsc/EF-SAI"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "17714\u201317723",
        "month": "jun",
        "year": 2022,
        "author": "Liao, Wei and Zhang, Xiang and Yu, Lei and Lin, Shijie and Yang, Wen and Qiao, Ning",
        "publisher": "IEEE",
        "booktitle": "2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        "doi": "10.1109/cvpr52688.2022.01721",
        "url": "http://dx.doi.org/10.1109/CVPR52688.2022.01721",
        "title": "Synthetic Aperture Imaging with Events and Frames",
        "type": "inproceedings",
        "key": "Liao_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-319-10599-4_1",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.33011311",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00142",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2012.06.014",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2011.10.003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01387",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093448",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3229884.3229892",
            "source": "crossref"
        },
        {
            "doi": "10.1145/237170.237199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2012.2230553",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.244",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2004.1315006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "title": "Motion deblur-ring with real events",
            "source": "crossref"
        },
        {
            "title": "Cbam: Convolutional block attention module",
            "source": "crossref"
        },
        {
            "title": "Event camera based synthetic aperture imaging",
            "source": "crossref"
        },
        {
            "title": "Pytorch: An imperative style, high-performance deep learning library",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "U-net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A sur-vey",
            "source": "crossref"
        },
        {
            "title": "Dy-namically reparameterized light fields",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Image reconstruction from neuromorphic event cam-eras using laplacian-prediction and poisson integration with spiking and artificial neural networks",
            "source": "crossref"
        },
        {
            "title": "Learning event -driven video deblurring and interpolation",
            "source": "crossref"
        },
        {
            "title": "A 240 x 180 130 db 3 ?s la-tency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "Time lens: Event-based video frame interpo-lation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

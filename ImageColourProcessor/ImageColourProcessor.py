
if __name__ == '__main__':
    import imageio

    flag = imageio.v2.imread("Andorra.png")
    print('Type of the image : ' , type(flag))
    print()
    print('Shape of the image : {}'.format(flag.shape))
    print('Image Hight {}'.format(flag.shape[0]))
    print('Image Width {}'.format(flag.shape[1]))
    print('Dimension of Image {}'.format(flag.ndim))
